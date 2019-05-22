import { IPerson, IUserProfileService } from '../interfaces';
import { ServiceScope, ServiceKey } from '@microsoft/sp-core-library';

export class MockUserProfileService implements IUserProfileService {
  public static readonly serviceKey: ServiceKey<IUserProfileService> = ServiceKey.create<IUserProfileService>('vrd:MockUserProfileService', MockUserProfileService);

  constructor(serviceScope: ServiceScope) {

  }

  public getPropertiesForCurrentUser(): Promise<IPerson> {
    return new Promise<IPerson>((resolve, reject) => {
      const user: IPerson = { Title: "Software Engineer", DisplayName: "Qianqian Li", PictureUrl: "https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-react/master/packages/office-ui-fabric-react/images/persona-male.png" };
      resolve(user);
    });
  }

  public getManagers(userLoginNames: string[]): Promise<IPerson[]> {
    return new Promise<IPerson[]>((resolve, reject) => {
      const users: IPerson[] = [];

      users.push({ Title: "Senior Engineer Manager", DisplayName: "Lu Hu", PictureUrl: "https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-react/master/packages/office-ui-fabric-react/images/persona-male.png" });
      resolve(users);
    });
  }

  public getReports(userLoginNames: string[]): Promise<IPerson[]> {
    return new Promise<IPerson[]>((resolve, reject) => {
      const users: IPerson[] = [];

      users.push({ Title: "Developer", DisplayName: "Russel Miller", PictureUrl: "https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-react/master/packages/office-ui-fabric-react/images/persona-female.png" });
      users.push({ Title: "IT Admin", DisplayName: "Robert Fischer", PictureUrl: "https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-react/master/packages/office-ui-fabric-react/images/persona-female.png" });

      resolve(users);
    });
  }

  public getProfilePhoto(photoUrl: string) {
    return photoUrl;
  }
}