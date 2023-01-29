import { Injectable } from '@angular/core';
import { TEAMS, VALIDATION_CODES } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  teams = TEAMS;
  teamNames = TEAMS.map((item) => item.name.toUpperCase());
  checkTeam(teamName: string): boolean {
    return this.teamNames.includes(teamName.toUpperCase());
  }

  checkCode(teamName: string, code: string): boolean {
    return this.teams
      .filter((item) => item.name.toUpperCase() === teamName.toUpperCase())[0]
      .codes.includes(code);
  }

  getTeamCode(teamName: string): string {
    let filteredTeams = this.teams.filter(
      (item) => item.name.toUpperCase() === teamName.toUpperCase()
    );
    if (filteredTeams.length > 0) {
      return filteredTeams[0].teamCode;
    }

    return '';
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
