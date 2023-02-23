import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from '../../clientes/entities/cliente.entity';

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('increment')
    id:string;

    @Column('text', { unique: true })
    email: string;

    @Column('text', { select: false })
    password: string;

    @Column('text')
    fullName: string;
    
    // @Column('text')
    // nif: string;
    @OneToOne(
        () => Cliente,
        (cliente) => cliente.user
    )
    @Column('bool', { default: true })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['user']
    })
    roles: string[];

    
    @JoinColumn()
    cliente?: Cliente
}
