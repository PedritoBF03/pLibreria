import { Libro } from "src/modules/libros/entities/libro.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'clientes'})
export class Cliente {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true} )
    nombre: string;

    @Column('text', { unique: true })
    apellidos: string;

    @Column('text', { nullable: true })
    direccion: string;

    @Column('text', { nullable: true })
    ciudad: string;

    @Column('text',{ nullable: true })
    localidad: string;

    // @OneToOne(
    //     (type) => Profile,
    //     (profile) => profile.cliente,
    //     { cascade: false }
    // )
    // profile?: Profile;
    
    // @PrimaryGeneratedColumn('uuid')
    // id: string;

    // @Column('text', { unique: true })
    // name: string;

    // @Column('text', { unique: true })
    // email: string;

    // @Column('text', { nullable: true })
    // github: string;

    // @Column('text', { nullable: true })
    // twitter: string;


    //Relaciones
    //Uno a muchos
    @OneToMany(
        () => Libro,
        (Libro) => Libro.cliente,
        { cascade: false }
    )
    libros?: Libro[];



}
