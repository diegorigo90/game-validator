import { Injectable } from '@angular/core';
import { TEAMS, VALIDATION_CODES } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  teams = TEAMS;
  teamCodes = TEAMS.map((item) => item.teamCode);
  checkTeam(teamCode: string): boolean {
    return this.teamCodes.includes(teamCode);
  }

  checkCode(teamCode: string, code: string): boolean {
    return [...VALIDATION_CODES.keys()].includes(code);
  }

  getTeamName(teamCode: string): string {
    let filteredTeams = this.teams.filter(
      (item) => item.teamCode.toUpperCase() === teamCode.toUpperCase()
    );
    if (filteredTeams.length > 0) {
      return filteredTeams[0].name;
    }

    return '';
  }

  getValidationCode(code: string): string | undefined {
    return VALIDATION_CODES.get(code);
  }

  checkValidationCode(validationCode: string) {
    return [...VALIDATION_CODES.values()].includes(validationCode);
  }
}
