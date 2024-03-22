export class chargerInfo {
    AccessComments: string | null;
    AddressInfo: {
      ID: number;
      Title: string;
      AddressLine1: string;
      AddressLine2: string | null;
      Town: string;
      StateOrProvince: string | null;
      Postcode: string;
      Country: {
        ISOCode: string;
        ContinentCode: string;
        ID: number;
        Title: string;
      };
      Latitude: number;
      Longitude: number;
      ContactTelephone1: string | null;
      ContactTelephone2: string | null;
      ContactEmail: string | null;
      RelatedURL: string | null;
      Distance: number | null;
      DistanceUnit: number | null;
    };
    Connections: any[]; 
    DataProvider: {
      WebsiteURL: string;
      Comments: string | null;
      DataProviderStatusType: {
        IsProviderEnabled: boolean;
        ID: number[];
        description: string[];
      };
      IsRestrictedEdit: boolean;
      IsOpenDataLicensed: boolean;
      IsApprovedImport: boolean;
      License: string;
      DateLastImported: string;
      ID: number;
      Title: string;
    };
    DataProviderID: number;
    DataProvidersReference: string;
    DataQualityLevel: number;
    DateCreated: string;
    DateLastConfirmed: string | null;
    DateLastStatusUpdate: string;
    DateLastVerified: string;
    DatePlanned: string | null;
    GeneralComments: string | null;
    ID: number;
    IsRecentlyVerified: boolean;
    MediaItems: any[] | null; // Typ do zdefiniowania
    MetadataValues: any[] | null; // Typ do zdefiniowania
    NumberOfPoints: number;
    OperatorID: number;
    OperatorInfo: {
      WebsiteURL: string;
      Comments: string | null;
      PhonePrimaryContact: string | null;
      PhoneSecondaryContact: string | null;
      IsPrivateIndividual: boolean | null;
      // Pozostałe właściwości operatora do zdefiniowania
    };
    OperatorsReference: string;
    ParentChargePointID: number | null;
    PercentageSimilarity: number | null;
    StatusType: {
      IsOperational: boolean;
      IsUserSelectable: boolean;
      ID: number;
      Title: string;
    };
    StatusTypeID: number;
    SubmissionStatus: {
      IsLive: boolean;
      ID: number;
      Title: string;
    };
    SubmissionStatusTypeID: number;
    UUID: string;
    UsageCost: string;
    UsageType: any | null;
    UsageTypeID: number | null;
    UserComments: string | null;
  
    constructor(data: any) {
      this.AccessComments = data?.AccessComments || null;
      this.AddressInfo = {
        ID: data?.AddressInfo?.ID || null,
        Title: data?.AddressInfo?.Title || null,
        AddressLine1: data?.AddressInfo?.AddressLine1 || null,
        AddressLine2: data?.AddressInfo?.AddressLine2 || null,
        Town: data?.AddressInfo?.Town || null,
        StateOrProvince: data?.AddressInfo?.StateOrProvince || null,
        Postcode: data?.AddressInfo?.Postcode || null,
        Country: data?.AddressInfo?.Country || null,
        Latitude: data?.AddressInfo?.Latitude || null,
        Longitude: data?.AddressInfo?.Longitude || null,
        ContactTelephone1: data?.AddressInfo?.ContactTelephone1 || null,
        ContactTelephone2: data?.AddressInfo?.ContactTelephone2 || null,
        ContactEmail: data?.AddressInfo?.ContactEmail || null,
        RelatedURL: data?.AddressInfo?.RelatedURL || null,
        Distance: data?.AddressInfo?.Distance || null,
        DistanceUnit: data?.AddressInfo?.DistanceUnit || null
      };
      this.Connections = data?.Connections || [];
      this.DataProvider = data?.DataProvider || null;
      this.DataProviderID = data?.DataProviderID || null;
      this.DataProvidersReference = data?.DataProvidersReference || null;
      this.DataQualityLevel = data?.DataQualityLevel || null;
      this.DateCreated = data?.DateCreated || null;
      this.DateLastConfirmed = data?.DateLastConfirmed || null;
      this.DateLastStatusUpdate = data?.DateLastStatusUpdate || null;
      this.DateLastVerified = data?.DateLastVerified || null;
      this.DatePlanned = data?.DatePlanned || null;
      this.GeneralComments = data?.GeneralComments || null;
      this.ID = data?.ID || null;
      this.IsRecentlyVerified = data?.IsRecentlyVerified || null;
      this.MediaItems = data?.MediaItems || null;
      this.MetadataValues = data?.MetadataValues || null;
      this.NumberOfPoints = data?.NumberOfPoints || null;
      this.OperatorID = data?.OperatorID || null;
      this.OperatorInfo = data?.OperatorInfo || null;
      this.OperatorsReference = data?.OperatorsReference || null;
      this.ParentChargePointID = data?.ParentChargePointID || null;
      this.PercentageSimilarity = data?.PercentageSimilarity || null;
      this.StatusType = data?.StatusType || null;
      this.StatusTypeID = data?.StatusTypeID || null;
      this.SubmissionStatus = data?.SubmissionStatus || null;
      this.SubmissionStatusTypeID = data?.SubmissionStatusTypeID || null;
      this.UUID = data?.UUID || null;
      this.UsageCost = data?.UsageCost || null;
      this.UsageType = data?.UsageType || null;
      this.UsageTypeID = data?.UsageTypeID || null;
      this.UserComments = data?.UserComments || null;
    }
  }
  