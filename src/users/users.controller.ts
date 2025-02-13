import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // Get /users
  findAll() {
    return [];
  }

  @Get(':id') // Get /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // Post /users
  create(@Body() user: object) {
    return user;
  }

  @Patch(':id') // Patch users/:id
  update(@Param('id') id: string, @Body() userUpdate: object) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // Get /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
