/* eslint-disable no-template-curly-in-string */
import { PLATFORM_NAME } from './locale.const';

export default {
  common: {
    LoadData: 'Loading data',
    Close: 'Close',
    Continue: `Continue`,
    Email: `Email`,
    Password: `Password`,
    RepeatPassword: `Confirm password`,
    Clear: 'Clear',
    Save: `Save`,
    Cancel: `Cancel`,
    Delete: `Delete`,
    Deleting: `Deleting`,
    Adding: `Adding`,
    Create: `Create`,
    Creating: `Creating`,
    Removing: `Removing`,
    Copy: `Copy`,
    CopyEmail: `Copy email`,
    Copied: `Copied`,
    Back: `Back`,
    Next: `Next`,
    Update: 'Update',
    Updating: `Updating data`,
    Agent: `${PLATFORM_NAME} agent`,
    Copyright: 'All Rights Reserved',
    Anonymous:
      'Faces detected in the Anonimous mode aren`t stored on the server',
    Upload: 'Upload',
    Start: 'Start',
    End: 'End',
    Add: 'Add',
    EmptySelectedList: `You didn't choose anything`,
    Attach: 'Attach',
    Version: 'Version {{version}} ',
    WhatsNew: "What's new?",
  },
  components: {
    ChangeViewButtons: {
      Table: 'Table view',
      Tile: ' Tile view',
    },
    Pagination: {
      EntitiesViewed: {
        Full: 'Viewed {{viewed}} from {{totalCount}}',
      },
    },
    LoadingProfileTable: {
      InQueue: 'Is in the queue',
      FileLimit: 'File limit exceeded',
      FileLimitSubIno: 'Only the first 25 files will be uploaded.',
      ShowDetails: 'Show details',
      MinimizeIconTooltip: 'Minimize table',
      SuccessAdded: 'Profile added',
      Photo: 'Photo',
      Status: 'Status',
      Details: 'Details',
      Statuses: {
        pending: 'Awaiting loading',
        failed: 'Failed',
        loading: 'Loading',
        success: 'Success',
      },
    },
    EditableComponents: {
      Edit: `Click to edit`,
    },
    PollingSwitch: {
      Title: 'Automatic updates',
    },
    LicenseAlert: {
      Title: {
        Canceled: `Subscription stopped!`,
        Trialing: `Payment information required!`,
        Unpaid: `Account is blocked!`,
      },
      Subtitle: {
        Canceled: `The account will be blocked after {{expirationDays}}.`,
        Trialing: `The account will be blocked after {{expirationDays}}.`,
        Unpaid: `All data will be deleted shortly.`,
      },
      Button: {
        Canceled: `Renew subscription`,
        Trialing: `Fill in payment details`,
        Unpaid: `Repeat payment`,
      },
      ChangePaymentData: `Change payment details`,
    },
    Notifications: {
      CloseAll: `Close all`,
      ShowMore: `{{count}} more notifications`,
      MarkAllButton: `Mark all as viewed`,
    },
    errors: {
      SomeError: `Something went wrong. Please try again later.`,
      PrivacyPolicy: `Confirm that you have read the agreements`,
      IsRequired: `This field is required`,
      InvalidEmail: `Please enter a valid email`,
      MinLengthPassword: `Password cannot be shorter than 8 characters`,
      MaxLengthField: `This field cannot be longer than 150 characters`,
      MaxAgentLengthField: `This field cannot be longer than 30 characters`,
      PasswordsDontMatch: `Passwords do not match`,
      AuthError: `You entered an incorrect email or password`,
      CurrentPasswordError: `You entered an incorrect password`,
      NewPasswordDontChange: `The new password must not match the old one.`,
      NetworkError: `Network error. Check your internet connection.`,
      NetworkErrorSuccess: `Connection restored`,
      UserExists: `User with this email already exists`,
      Minimum: `Minimum of 8 characters`,
      LowQualityPhoto: `The image is not suitable for recognition.`,
      NoFacesFound: `No faces found.`,
      ImageDecodeFailed: `Invalid image format.`,
      TooManyFiles: `Too many files`,
      MaxLengthName: `This field cannot be longer than 70 characters`,
      MaxLengthDesc: `This field cannot be longer than 255 characters`,
      WrongDateFormat: `Wrong date format`,
      IncorrectTextFormat: `Incorrect text format`,
      MinDate: `Date of birth cannot be earlier than 01/01/1940`,
      MaxDate: `Date of birth cannot be later than the current date`,
      OnlyImage: `Only image can be uploaded`,
      BigImageWidth:
        'The width and height of the image should not exceed 4032 pixels.',
      BigImageSize: 'Image size must not exceed 8Mb.',
      MoreThenOneFace: 'The image contains more than one face',
      ProfileLimitExceeded:
        'Limit reached. To add more profiles, connect the Basic plan.',
      AccountBlocked: 'Account is blocked',
      IncorrectEmail: 'Invalid Email',
      IncorrectURL: `Invalid URL`,
      ProfileAlreadyExist: `Such a Profile already exists`,
      ChooseNewImage:
        'Choose a different image otherwise the profile will be created without a photo',
      ImageWithAlphaChannel: 'The image contains an alpha channel.',
      CreateProfileWithoutPhoto: 'Creating a profile without a photo.',
      ProfileFieldExists: 'Custom field already exists',
      ProfileFieldNotExists: 'Custom field does not exist',
    },
    Groups: {
      Creating: `Creating watchlist`,
      Created: `Watchlist created`,
      Updating: `Updating watchlist`,
      Updated: `Watchlist updated`,
      Name: `Name`,
      Color: `Color`,
      Events: {
        SuccessDeleted: `Watchlist deleted`,
        ErrorDeleted: `Error when deleting a watchlist`,
        Deleting: `Deleting a watchlist`,
      },
    },
    Modal: {
      UpdateOldAgents: {
        Title: 'Update OMNI Agents',
        FirstText: `We have updated OMNI Platform. For correct work of this version OMNI Agents should also be updated.`,
        SecondText: `In this release we have improved recognition quality and work stability. You can review all updates `,
        Link: `here.`,
        OkButton: 'Notified',
        DontShowAgain: `Don't show again`,
      },
      ManageField: {
        Name: 'Field name',
        Type: {
          Title: 'Type',
          profile: 'Profile',
          camera: 'Camera',
        },
        Delete: {
          Title: 'Custom field deleting',
          Message: `Are you sure you want to delete the custom field?`,
          Loading: 'Deleting custom field',
          Success: 'Custom field deleted',
          Error: 'An error occured while deleting a custom field',
        },
      },
      CreateField: {
        Title: 'Custom field creation',
        FieldName: 'Field name',
        Loading: 'Creating custom field',
        Success: 'Custom field created',
        Error: 'An error occured while creating a custom field',
        Type: {
          Title: 'Type',
          profile: 'Profile',
          camera: 'Camera',
        },
      },
      CreateTrigger: {
        Title: 'Trigger creation',
        Loading: 'Creating trigger',
        Success: 'Trigger created',
        Error: 'An error occured while creating an trigger',
      },
      ManageTrigger: {
        Title: 'Title',
        Endpoints: {
          Title: 'Endpoints',
          NewEndpoint: 'New endpoint',
          EmptyAdd: 'No endpoints',
          NotFound: 'Not found',
          SearchPlaceholder: 'Email or URL',
          NoEndpoints: 'You have not added endpoints yet',
        },
      },
      DeleteTrigger: {
        Title: 'Deleting a trigger',
        Message: `Are you sure you want to delete the trigger?`,
        Loading: 'Deleting the trigger',
        Success: 'Trigger deleted',
        Error: 'An error occurred while delete the trigger',
      },
      UpdateTrigger: {
        Loading: 'Update the trigger',
        Success: 'Trigger updated',
        Error: 'An error occurred while updating the trigger',
      },
      CreateEndpoint: {
        Title: 'Endpoint creation',
        Loading: 'Creating endpoint',
        Success: 'Endpoint created',
        Error: 'An error occured while creating an endpoint',
      },
      ManageEndpoint: {
        Delete: {
          Title: 'Deleting an endpoint',
          Message: `Are you sure you want to delete the endpoint?`,
          Loading: 'Deleting endpoint',
          Success: 'Endpoint deleted',
          Error: 'An error occured while deleting the endpoint',
        },
        Updating: 'Updating endpoint',
        SuccessUpdating: 'Endpoint updated',
        ErrorUpdating: 'An error occured while updating the endpoint',
        Type: {
          Title: 'Type',
          Email: 'Email',
          Webhook: 'Webhook',
          WebInterface: 'Web interface',
          GET: 'GET',
          POST: 'POST',
        },
        Method: 'Method',
        Url: 'URL',
        Email: 'Email',
      },
      CreateGroup: {
        Title: 'Watchlist creation',
      },
      ManageGroup: {
        Triggers: {
          Title: 'Triggers',
        },
      },
      CreateIntegration: {
        Title: 'Integration creation',
      },
      DrawerBlock: {
        Info: 'Information',
        ActivitiesList: 'List of activities',
        Metadata: 'Metadata',
        CreationDate: 'Creation date',
        LastModify: 'Last modify date',
      },
      DeleteGroup: {
        Title: 'Deleting a watchlist',
        Message: `Are you sure you want to delete the watchlist?`,
      },
      Letter: {
        WriteButton: `Write a letter`,
        CloseButton: `Cancel`,
      },
      CreateAgent: {
        Title: `Download ${PLATFORM_NAME} Agent`,
        DownloadMessage: `To start using ${PLATFORM_NAME} Agent, download and install the app.`,
        CloseButton: `Сlose`,
      },
      UpdateAgent: {
        Label: `Name`,
        SuccessUpdate: `${PLATFORM_NAME} Agent updated`,
        Updating: `Update the ${PLATFORM_NAME} agent`,
        ErrorUpdate: `An error occurred while updating the ${PLATFORM_NAME} agent`,
      },
      DeleteAgent: {
        Title: `${PLATFORM_NAME} Agent deleting`,
        Message: `Are you sure you want to delete the ${PLATFORM_NAME} Agent?`,
        SuccessDelete: `${PLATFORM_NAME} Agent deleted`,
        Deleting: `Remove the ${PLATFORM_NAME} agent`,
        ErrorDelete: `An error occurred while delete the ${PLATFORM_NAME} Agent`,
      },
      DeleteProfile: {
        Title: `Profile deleting`,
        Message: `Are you sure you want to delete the profile?`,
        SuccessDelete: `Profile deleted`,
        ErrorDelete: `An error occurred while delete the profile`,
        SuccessDeleteProfiles: `Profile deleted`,
        ErrorDeleteProfiles: `An error occurred while delete profiles`,
      },
      DeleteAccount: {
        Title: `Account deleting`,
        Message: `We are very sorry that you are leaving us. To delete your account, contact us via the email below.`,
      },
      ChangePassword: {
        Title: `Change password`,
        CurrentPasswordLabel: `Current password`,
        NewPasswordLabel: `New password`,
        RepeatPasswordLabel: `Confirm password`,
        Button: `Change password`,
        SuccessTitle: `Password changed`,
        LoadingTitle: `Changing the password`,
      },
      UploadImage: {
        DragImage: `Drag an image in this area or choose an image via the file manager`,
        Button: `Choose an image`,
      },
      EnterprisePlan: {
        Title: `Enterprise Plan`,
        Message: `Please contact us to know how we can help your business!`,
      },
    },
    Filters: {
      all: `All`,
      active: `Active`,
      inactive: `Not activated`,
      stopped: `Stopped`,
      read: `Viewed`,
      unread: `Not viewed`,
      StartTime: `Start`,
      EndTime: `End`,
      Apply: `Apply`,
      Reset: `Reset`,
      ProfileId: 'Profile ID',
      CreationDate: 'Creation period',
      ModifyDate: 'Period of change',
      Sort: 'Sorting',
      creationDate: 'From old to new',
      '-creationDate': 'From new to old',
      creation_date: 'From old to new',
      '-creation_date': 'From new to old',
      lastModified: 'By modify date(from old to new)',
      '-lastModified': 'By modify date(from new to old)',
      last_modified: 'By modify date(from old to new)',
      '-last_modified': 'By modify date(from new to old)',
      NotificationId: 'Notification ID',
      TriggerId: 'Trigger ID',
      EndpointId: 'Endpoint ID',
      Title: 'Title',
      info__title: 'By title (descending)',
      '-info__title': 'By title (ascending)',
      info__name: 'By name (descending)',
      '-info__name': 'By name (ascending)',
      info__age: `By age (ascending)`,
      '-info__age': `By age (descending)`,
      info__gender: `Women first`,
      '-info__gender': `Men first`,
      profile_groups__title: `By group name (ascending)`,
      '-profile_groups__title': `By group name (descending)`,
      title: `By trigger name (ascending)`,
      '-title': `By trigger name (descending)`,
      ModifyDatepicker: 'Period of change',
      Age: 'Age',
      Description: 'Description',
      Name: 'Name',
      Type: 'Type',
      Method: 'Method',
      URL: 'URL',
      Email: 'Email',
      GET: 'GET',
      POST: 'POST',
      WebInterface: 'Web interface',
      Webhook: 'Webhook',
      '-type': 'Type (descending)',
      type: 'Type (ascending)',
      '-meta__method': 'Method (descending)',
      meta__method: 'Method (acsending)',
      '-meta__url': 'URL (descending)',
      meta__url: 'URL (ascending)',
      '-meta__target_email': 'Email (descending)',
      meta__target_email: 'Email (ascending)',
    },
    Header: {
      CreateButton: {
        agents: `Create ${PLATFORM_NAME} Agent`,
        profiles: `Create a profile`,
        ManyProfiles: 'Create multiple',
        Group: 'Create a watchlist',
        Trigger: 'Create a trigger',
        Endpoint: 'Create an endpoint',
        Integration: 'Create an integration',
        ProfilesField: 'Create custom field',
      },
    },
    NotificationManager: {
      ConnectionError: {
        Title: `Network error. Please try again later.`,
        Button: `Refresh`,
      },
      UnauthorizeError: {
        Title: `Authentication error`,
      },
    },
    account: {
      Title: `Account`,
      greetings: {
        morning: `Good morning,`,
        day: `Good afternoon,`,
        evening: `Good evening,`,
        night: `Good night,`,
      },
      delAcc: `Delete account`,
      logOut: `Sign out`,
    },
  },
  __comment2: `sections of pages`,
  pages: {
    Settings: {
      Title: 'Settings',
      Triggers: {
        Title: 'Triggers',
        NoItems: 'Triggers are missing',
        NoFilterItems: `There are no triggers matching the filters. Try changing filters`,
        Table: {
          Title: 'Title',
          EndpointsCount: 'Number of endpoints',
          CreationDate: 'Creation date',
        },
        EndpointsLabel: 'Choose endpoints',
        MoreEndpoints: 'And {{count}} endpoints',
        MoreEndpointsOne: 'And another {{count}} endpoint',
      },
      Endpoints: {
        Title: 'Endpoints',
        NoItems: 'Endpoints are missing',
        NoFilterItems: `There are no endpoints matching the filters. Try changing filters`,
        Type: {
          Title: 'Type',
          Email: 'Email',
          Webhook: 'Webhook',
          WebInterface: 'Web interface',
          Destination: 'Destination',
        },
        CreationDate: 'Creation date',
      },
      Groups: {
        NoItems: 'Watchlists are missing',
        NoFilterItems: `There are no watchlists matching the filters. Try changing filters`,
        Title: 'Watchlists',
        Color: 'Color',
        TableTitle: 'Title',
        CreationDate: 'Creation date',
        AttachOneTitle: 'Choose watchlist',
        AttachMoreTitle: 'Choose watchlists',
        SingleWatchlist: 'Watchlist',
      },
      Fields: {
        Title: 'Custom fields',
        FieldName: 'Field name',
        MissingFields: 'Custom fields are missing',
        Table: {
          Name: 'Name',
          Entity: 'Entity',
        },
      },
      Aside: {
        Fields: {
          Description: 'In this section you can set up custom fields',
        },
        Triggers: {
          Description:
            'The list of mechanisms that are responsible for creating alerts. By analyzing the information from the cameras, they determine whether it is necessary to create an alert. The trigger is also responsible for sending notifications to the endpoints that are associated with it.',
        },
        Filters: {
          Title: 'Filters',
          Ids: 'IDs',
          Groups: {
            GroupIds: 'Watchlist IDs',
            Title: 'Title',
            ColorTitle: 'Color',
          },
        },
        General: {
          Description:
            'Setting the thresholds for face recognition allows you to achieve optimal quality in specific conditions.',
          CameraHint:
            'Before changing the threshold, read the <settingsLink>recommendations</settingsLink> for installing the camera.',
          Notification: {
            Title: 'Notification',
            Description:
              'The higher the threshold degree of similarity, the less likely a profile is to be falsely verified, however, some suitable images may also fail verification.',
          },
          Activity: {
            Title: 'Сlustering',
            Description:
              'The higher the threshold degree of similarity, the less likely it is that the activities of different profiles will fall into one cluster, however, it is possible to form several clusters for the activities of one profile.',
          },
          RecommendValue: 'The recommended value is 0.85',
        },
        Info: {
          Title: 'Information',
          Groups: {
            Description:
              'Watchlist allows you to group people for their subsequent monitoring.',
          },
          Endpoints: {
            Description:
              'The page provides a list of destination endpoints to which notifications will be sent.',
          },
        },
        Agents: {
          Status: 'Status',
        },
      },
      General: {
        Title: 'General',
        Updated: 'General settings updated',
        Updating: 'Updating general settings',
        Error: 'An error occurred while updating general settings',
        Notification: {
          Title: 'Notification threshold',
        },
        Activity: {
          Title: 'Activity clustering threshold',
        },
      },
      Integration: {
        Title: 'Integration',
        Description:
          'Creation and management of integration with other systems',
        NoItems: 'Integrations are missing',
        System: 'System',
        Url: 'Url',
        Login: 'Login',
        Password: 'Password',
        CreationData: 'Creation date',
        Systems: {
          SecurOS: 'SecurOS',
        },
        Creation: {
          Creating: 'Creating an integration',
          Created: 'Integration was created',
          Failed: 'Failed to create integration',
        },
        Deletion: {
          Title: 'Deleting an integration',
          Message: `Are you sure you want to delete the integration?`,
          Loading: 'Deleting the integration',
          Success: 'Integration deleted',
          Error: 'An error occurred while delete the integration',
        },
      },
    },
    Billing: {
      Title: `Billing`,
      Plan: `Tariff plan`,
      Date: {
        NextPayment: `Next payment`,
        ExpiryDate: `Expiry date`,
        StartOfSubscription: `Start of subscription`,
        DayOfNextTry: `Date of next attempt`,
        CancellationDay: `Expiry date`,
      },
      PaymentMethod: `Payment method`,
      Buttons: {
        RepeatPayment: `Repeat payment`,
        Manage: `Manage`,
        Upgrade: `Upgrade`,
        ChangePaymentMethod: `Change payment details`,
        StopSubscription: `Stop subscription`,
        RenewSubscription: `Renew subscription`,
        FillPaymentMethod: `Fill in payment details`,
      },
      Status: {
        Canceled: `Subscription stopped`,
        Trialing: `Trial period`,
        Active: `Subscription is active`,
        PastDue: `Attempt to pay again`,
        UnPaid: `Failed to make payment`,
      },
      LicensePlan: {
        Title: `Your tariff plan`,
        BestChoice: `Best choice`,
        Professional: `Professional`,
        Basic: `Basic`,
        Trialing: `Trial`,
        UpgradePlan: `Upgrade the tariff plan`,
        Subtitle: {
          Basic: `for Individuals and Homeowners`,
          Professional: `for Businesses and Developers`,
        },
        PerDay: `per day for a camera`,
        FaceRecognition: `Face recognition`,
        FaceAttributes: `Face attributes`,
        ProfileUp:
          'Up to 100 profiles to add. Then + ${{profilesCost}}/day for each additional 1000 profiles',
        ProfileLimit: `100 profiles to add`,
        AgentLimit: `3 ${PLATFORM_NAME} Agents`,
      },
      OnPremise: {
        Title: `Need more?`,
        Name: `Enterprise`,
        Text: `for Businesses`,
        WriteButton: `Read more`,
      },
      AttachCreditCard: {
        Success: `The card has been successfully attached!`,
        Error: `An error occurred while trying to attach the card!`,
      },
    },
    NotFound: {
      Title: `404 Page Not Found`,
      Button: `Go to home page`,
    },
    Dashboard: {
      Title: `Home`,
      GettingStarted: `Quick Start`,
      GetStartedWithPlatform: `For detailed information about ${PLATFORM_NAME} Agent see <whatIsAgentLink>${PLATFORM_NAME} documentation</whatIsAgentLink>.`,
      CompleteGuide: `A detailed guide on how to install, start up and use ${PLATFORM_NAME} Platform`,
      DownloadNuitrackAgent: `Download and install ${PLATFORM_NAME} Agent`,
      InstallOnPremAgent: `Install ${PLATFORM_NAME} Agent using the installer from the archive.`,
      StartAgentAndAcivation: `Launch ${PLATFORM_NAME} Agent and go through all the activation steps.`,
      CheckAgentSendData: `Make sure that the data on ${PLATFORM_NAME} Agents, activities and profiles has been updated.`,
      AgentInfo: `Also the archive contains a user manual that describes what an ${PLATFORM_NAME} Agent is and what it is used for.`,
      Resources: `Resources`,
      Activities: `Activities`,
      Profiles: `Profiles`,
      NuitrackAgents: `${PLATFORM_NAME} Agents`,
      Notifications: `New notifications`,
      CheckAgentsTitle: `Check ${PLATFORM_NAME} Agents`,
      SomeProblemTitle: `There is a problem`,
      AllOkTitle: `Everything is fine`,
      CheckAgentsMessage: `We noticed that you no longer have active ${PLATFORM_NAME} Agents. Data is not collected.`,
      SomeProblemMessage: `We have noticed that one or more ${PLATFORM_NAME} Agents are not working. Data is not collected from them.`,
      AllOkMessage: `All ${PLATFORM_NAME} Agents are working. The data is successfully collected.`,
      TopWidgets: {
        Docs: `Documentation`,
        PlatformApi: `Platform API`,
        ImageApi: `Image API`,
        Agents: {
          Stopped: `stopped`,
        },
      },
      Widgets: {
        Analytic: {
          Title: `Analytics`,
          Login: `To enter the analytics dashboards, use your email and password.`,
          Error: `An error occurred while creating the analytics dashboards, please contact our support team `,
          Retail: `For Crowd Analytics`,
          Digital: `For Digital Signage`,
          RetailDescription: `People counting and age, gender and emotions analytics`,
          DigitalDescription: `Ads viewing statistics`,
        },
        PlatformAPI: {
          Description: `An interactive console for Platform API testing`,
        },
        AuthorizationKey: {
          Title: 'Authorization key',
          Description: 'Use this key to access the API',
        },
        ImageAPI: {
          Description: `An interactive console for Image API testing`,
        },
      },
    },
    Agents: {
      Title: `${PLATFORM_NAME} Agents`,
      AgentInfo: {
        Name: `Name`,
        Status: `Status`,
      },
      AgentItemStatus: {
        active: `Active`,
        inactive: `Stopped`,
        not_activated: `Not activated`,
      },
      NoItems: `${PLATFORM_NAME} Agents are missing`,
      NoFilterItems: `There are no ${PLATFORM_NAME} Agents matching the filters. Try changing filters`,
      RightMenu: {
        Download: {
          description: `${PLATFORM_NAME} Agent installation files`,
        },
        Info: {
          title: `Information`,
          description: `${PLATFORM_NAME} Agent is software that collects the traffic data from your cameras, processes the video streams and sends tracking results to the server for further analytics.`,
          hrefs: {
            instruction: `${PLATFORM_NAME} Agent installation instructions`,
          },
        },
      },
    },
    Register: {
      Title: `Sign Up`,
      SignInButton: `Sign In`,
      RegisterButton: `Sign Up`,
      PrivacyPolicy: `I agree to <termsLink>3DiVi Terms of Service</termsLink> and <policyLink>Privacy Policy</policyLink>.`,
    },
    ChangePassword: {
      Title: `Change password`,
      ErrorNotice: `Link is not valid`,
      ErrorMessage: `The link to reset your password may have expired. Try again to recover your password or contact us.`,
      SuccesNotice: 'You`ve successfully changed your password',
    },
    ConfirmEmail: {
      BackSignInButton: `Back to Sign In`,
      Notice: 'You`ve successfully confirmed your email',
      ErrorNotice: `Link is not valid`,
      ErrorMessage: `The email confirmation link may have expired. Try to sign in or contact our support team at support-platform@3divi.com.`,
      SignInButton: `Sign In`,
    },
    Profiles: {
      Title: `Profiles`,
      UpdatesCount: 'You have {{updatesCount}} new profiles. Click to update',
      NoProfile: `No profiles added`,
      NoFilterProfile: `There are no profiles matching the filters. Try changing filters`,
      Creating: `Adding a profile`,
      Created: `Profile added`,
      ErrorCreating: `Error creating profile`,
      RemoveFromGroup: `Remove from watchlist`,
      AddToGroup: `Add to watchlist`,
      ProfilesAdded: `Profile added to watchlist`,
      AddingToGroupError: `An error occurred while adding profiles to the watchlist`,
      UpdatingAvatar: 'Updating profile photo',
      UpdatedAvatar: 'Profile photo updated',
      ProfileInfo: {
        Photo: `Image`,
        Groups: `Watchlists`,
        Activities: `Activities`,
        Name: `Name`,
        Gender: `Gender`,
        Age: `Age`,
        MoreGroups: `{{countOtherGroups}} more `,
      },
      ProfileCard: {
        Photo: 'Profile photo',
        Candidates: {
          Search: 'Looking for duplicates',
          Found: 'Duplicates found',
        },
        Creation: 'Profile creation',
        UpdateInfoFailed: `Failed to update profile information`,
        UpdateInfoSuccess: 'Profile information updated',
        Groups: {
          Title: `Watchlists`,
          NoGroups: 'You haven`t added watchlists yet',
          EmptyAdd: `No watchlists to add`,
          NewGroup: `New watchlist`,
          NotFound: `Not found`,
          GroupName: `Watchlist name`,
          SuccessRemove: `Watchlist removed`,
          ErrorRemove: `An error occurred while removing a watchlist`,
          SuccessAdd: `Watchlist added`,
          ErrorAdd: `An error occurred while adding a watchlist`,
          MoreGroups: 'And {{count}} watchlists',
          MoreGroupsOne: 'And another {{count}} watchlist',
        },
        Gender: {
          Title: `Gender`,
          MALE: `Male`,
          FEMALE: `Female`,
        },
        Name: `Name`,
        Birthday: `Date of birth`,
        Description: `Description`,
      },
      RightMenu: {
        Info: {
          title: `Information`,
          description: `The page contains autogenerated profiles and manually created profiles`,
        },
        Filters: {
          title: `Filters`,
        },
      },
      Filters: {
        WatchLists: {
          Title: 'Watchlists',
          Search: 'Enter name',
          Empty: "You don't have any watchlist",
        },
        Avatar: {
          Title: 'Avatar',
          All: 'All',
          With: `With avatar`,
          Without: 'Without avatar',
        },
        Sort: {
          Label: `Sorting`,
          creation_date: `From old to new`,
          '-creation_date': `From new to old`,
          last_modified: `By modification date (from old to new)`,
          '-last_modified': `By modification date (from new to old)`,
          info__name: `By name (A to Z)`,
          '-info__name': `By name (Z to A)`,
          info__age: `By age (ascending)`,
          '-info__age': `By age (descending)`,
          info__gender: `Women first`,
          '-info__gender': `Men first`,
          profile_groups__title: `By group name (A to Z)`,
          '-profile_groups__title': `By group name (Z to A)`,
        },
        Gender: {
          Title: `Gender`,
          ALL: `All`,
          MALE: `Male`,
          FEMALE: `Female`,
        },
      },
    },
    RecoveryPassword: {
      Title: `Password recovery`,
      SignInButton: `Sign In`,
      RegisterButton: `Sign Up`,
      SuccesNotice: `Instructions sent`,
      SuccesMessage: `Instructions to change your password have been sent to {{mail}}.`,
      EmailNotSendNotice: `Enter the email associated with your account`,
    },
    SignIn: {
      Title: `Sign In`,
      RecoverPassword: `I forgot my password`,
      RegisterButton: `Sign Up`,
      SignInButton: `Sign In`,
    },
    Workspaces: {
      Title: `Workspaces`,
      NoItems: {
        active: `No active workspaces`,
        inactive: `All workspaces are active `,
      },
      Status: {
        Active: `Active`,
        Stopped: `Stopped`,
      },
    },
    SendConfirmEmail: {
      Notice: `Check your email`,
      Message:
        'Please confirm your email to activate your account. To do this, follow the instructions we`ve sent to {{mail}}.',
      SignInButton: `Sign In`,
      BackSignInButton: `Back to Sign In`,
      ResendButton: `Send the instructions again`,
      Timer: `{{timer}} seconds left before resubmission`,
    },
    Notifications: {
      Title: `Notifications`,
      UpdatesCount:
        'You have {{updatesCount}} new notifications. Click to update',
      NoItems: `Notifications are missing`,
      NoFilterItems: `There are no notifications matching the filters. Try changing filters`,
      CommentPlaceholder: `Add a comment`,
      MarkAsRead: `Mark as viewed`,
      Table: {
        Photos: `Images`,
        Group: `Watching lists`,
        Viewed: `Viewed`,
        Where: `Notification method`,
        Date: `Date`,
        ProfileName: `Profile name`,
      },
      Endpoints: {
        Type: {
          Email: `Email`,
          Webhook: `Webhook`,
          WebInterface: `Push`,
        },
        Status: {
          pending: `: pending`,
          failed: `: failed`,
          retrying: `: retrying`,
          success: ``,
        },
      },
      Aside: {
        Info: {
          Title: `Information`,
          Description: `View all ever generated notifications.`,
        },
        Filters: {
          ActiveNotification: {
            Title: 'Alert Activity',
            All: 'Any',
            Active: 'Active',
            Inactive: 'Inactive',
          },
          EndpointsSending: {
            Title: 'Attached endpoints',
            All: 'Any',
            Send: 'With endpoints',
            NotSend: 'Without endpoints',
          },
          Title: `Filters`,
          WatchlistTitle: 'Watchlist',
          Statuses: 'Alert status',
          Active: 'Active',
          Sent: 'Sent',
          Viewed: 'Viewed',
          NotViewed: 'Not viewed',
          All: 'Any',
          CreationDatepicker: 'Period of receipt',
        },
      },
    },
    Activities: {
      Title: `Activities`,
      UpdatesCount: 'You have {{updatesCount}} new activities. Click to update',
      NoItems: `Activities are missing`,
      NoFilterItems: `There are no activities matching the filters. Try changing filters`,
      Status: {
        FINALIZED: 'Activity is completed, a person is out of the frame',
        PROGRESS: 'Activity is not completed, a person is in the frame',
        FAILED:
          'The agent didn’t send an activity update for more than 30 sec.',
      },
      Table: {
        Photos: `Images`,
        Date: `Date`,
      },
      Buttons: {
        CreateProfile: `Create a profile`,
      },
      Aside: {
        Info: {
          Title: `Information`,
          Description: `View all ever generated activities.`,
        },
        Filters: {
          Title: `Filters`,
        },
      },
    },
  },
};