import { Injectable } from '@nestjs/common';
import { ITrack } from './track/track.interface';
import { Tracks } from 'helpers/Tracks';
const BASE_DATO='http://localhost:3030/tracks';//lleva el nombre tracks por que el json le pusimos ese nombre,podria llamarse "pepito"
@Injectable()
export class AppService {
  async getTracks(): Promise<ITrack[]> {
    const res=await fetch(BASE_DATO);
    const parse=await res.json();
    return parse;
  }
  async getTrackById(id:number):Promise<ITrack>{
    const base=`${BASE_DATO}/${id}`;
    const res=await fetch(base);
    if(!res.ok){
      console.log("valor:"+base)
      return;
    }
    const parse:ITrack=await res.json();
    return parse;
  }
  async createTrack(track:Tracks){
    const id:number=await this.setId();
    const newTrack={...track,id};
    const res=await fetch(BASE_DATO,{
      method:'POST',
      headers:{
        'Content-Type':'aplication/json',
      },
      body: JSON.stringify(newTrack),
    })
    const parse=res.json();
    return parse;
  }
  private async setId():Promise<number>{
    const tracks = await this.getTracks();
    const id=tracks.pop().id+1;
    return id;
  }
  async deleteTrackById(id:number){
    const res=await fetch(BASE_DATO + id,{
      method:'DELETE',
    });
    if(!res.ok){
      console.error('Error al obtener datos:'+`${BASE_DATO+id}`);
    return;
    }
    const parse=res.json();
    return parse;
  }
}
