import { AddressClass } from "./address";
import { AccountClass } from "./account";
import { Meta } from "./meta";

export class UserResponse {
  Data: UserClass[] = [];
  Meta: Meta = new Meta();
}

export class UserRequest {
  Data: UserClass[] = [];

  constructor(data: UserClass[] | null) {
    if (data === null) {
      return;
    }
    this.Data = data;
  }
}

export class UserClass {
  ID: string = '';
  AboutMe: string = '';
  AccountID: string = '';
  Account: AccountClass = new AccountClass(null);
  Address: AddressClass = new AddressClass(null);
  Alias: string = '';
  APIGatewayURL: string = '';
  APIGatewayUser: string = '';
  APIKey: string = '';
  Auth0UserID: string = '';
  CommunityNickname: string = '';
  CompanyName: string = '';
  ContactID: string = '';
  Department: string = '';
  Division: string = '';
  Email: string = '';
  Environment: string = '';
  Extension: string = '';
  Fax: string = '';
  FirstName: string = '';
  FullPhotoURL: string = '';
  GitHub: string = '';
  IsActive: boolean = false;
  LastIP: string = '';
  LastLogin: Date | null = null;
  LastName: string = '';
  LinkedIn: string = '';
  LoginCount: number = 0;
  MobilePhone: string = '';
  Name: string = '';
  Phone: string = '';
  SenderEmail: string = '';
  SenderName: string = '';
  SmallPhotoURL: string = '';
  Status: string = '';
  TenantID: string = '';
  Title: string = '';
  Twitter: string = '';
  Username: string = '';
  UserRoleID: string = '';
  UserType: string = '';

  constructor(data: any) {
    if (!data) {
      return;
    }
    for (const key in data) {
      if (data.hasOwnProperty(key) && key in this) {
        if (typeof data[key] !== 'object' || data[key] === null) {
          if (typeof (this as any)[key] === 'boolean' && data[key] === 1) {
            (this as any)[key] = true;
          } else {
            (this as any)[key] = data[key];
          }
        }
      }
    }
    this.Address = new AddressClass(data.address);
  }
}