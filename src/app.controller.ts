import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('report/:reportType')
export class AppController {

  @Get()
  getAllReports() {
    return [];
  }

  @Get(':id')
  getAllReportById() {
    return {};
  }

  @Post()
  createReport() {
    return 'creating'
  }

  @Put(':id')
  updateReportById() {
    return 'Putting'
  }

  @Delete(':id')
  deleteReportById() {
    return 'Deleting'
  }

}
