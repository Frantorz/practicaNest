import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService} from './app.service';
import { ITrack } from './track/track.interface';
import { Tracks } from 'helpers/Tracks';
@Controller('tracks/')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get(':id')
  getTrackBy(@Param('id') id:number):Promise<ITrack>{
    return this.appService.getTrackById(id);
  }
  @Get('/')
  getTracks(): Promise<ITrack[]> {
    return this.appService.getTracks();
  }
  @Post()
  createTrack(@Body() body:Tracks):Promise<void>{
    const {title,duration,artist}=body;
    return this.appService.createTrack({title,duration,artist});
  }
  @Delete(':id')
  deleteTrack(@Param('id') id:number){
    return this.appService.deleteTrackById(Number(id));
  }
}
