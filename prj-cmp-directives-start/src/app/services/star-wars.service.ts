import {LogService} from './log.service';
import {Injectable} from '@angular/core';

@Injectable()
export class StarWarsService {
  private characters = [
    {name: 'Luke', side: ''},
    {name: 'DarkVader', side: ''}
  ];
  private logService: LogService;
  constructor(logService: LogService) {
    this.logService = logService;
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
        return char.side === chosenList;
    })
  }

  onSideAssigned(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name ? true : false;
    })
    this.characters[pos].side = charInfo.side;
    this.logService.writeLog('Canged side of ' + charInfo.name + ', new side: ' + charInfo.side);
  }

}
