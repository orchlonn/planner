import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UsersModule, DatabaseModule, EmployeesModule],
})
export class AppModule {}
