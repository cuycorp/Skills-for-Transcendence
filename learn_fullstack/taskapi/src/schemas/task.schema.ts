/**
 * Funcionanlidad del schema: informacion que mongodb va a anadir
 * 
 */
import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose' 
//para podert convertir clase a formato mongodb

@Schema({
    timestamps: true 
    //le va anadir propiedad createdAt y updatedAt 
    // al dato automaticamente
})

/**
 * Modelo creado para hacer consultas a la base de datos
 */

export class Task {
    @Prop({
        unique: true,
        required: true,
        trim: true
    }) //indica que title es una propiedad del documento 
    title : string;

    @Prop({
        trim: true
    })
    description: string;

    @Prop({
        default: false
    })
    done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task)