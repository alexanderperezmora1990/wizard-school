import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logos'
})
export class LogosPipe implements PipeTransform {

  logos = {
    slytherin: '../../../assets/img/slytherin.png',
    gryffindor: '../../../assets/img/gryffindor.png',
    ravenclaw: '../../../assets/img/ravenclaw.png',
    hufflepuff: '../../../assets/img/hufflepuff.png',
  };

  transform(key: string, ...args: unknown[]): unknown {
    return this.logos[key];
  }

}
