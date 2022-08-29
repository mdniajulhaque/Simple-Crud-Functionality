import {  Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './Entity/student.model';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.services';
@Module({
    imports: [MongooseModule.forFeature([{name: Student.name, schema: StudentSchema}])],
    providers: [StudentService, StudentResolver],
    exports:[StudentService]
})

export class StudentModule {}