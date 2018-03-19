/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as moment from "moment";


/**
 * @class
 * Initializes a new instance of the ApiTokensCreateRequest class.
 * @constructor
 * @member {string} [description] The description of the token
 * @member {array} [scope] The scope for this token.
 */
export interface ApiTokensCreateRequest {
  description?: string;
  scope?: string[];
}

/**
 * @class
 * Initializes a new instance of the ApiTokensGetResponse class.
 * @constructor
 * @member {string} id The unique id (UUID) of the api token
 * @member {string} [description] The description of the token
 * @member {array} [scope] The scope for this token.
 * @member {string} createdAt The creation time
 */
export interface ApiTokensGetResponse {
  id: string;
  description?: string;
  scope?: string[];
  createdAt: string;
}

/**
 * @class
 * Initializes a new instance of the AzureSubscriptionResponse class.
 * @constructor
 * @member {string} subscriptionId The azure subscription id
 * @member {string} tenantId The tenant id of the azure subscription belongs to
 * @member {string} subscriptionName The name of the azure subscription
 * @member {boolean} [isBilling] If the subscription is used for billing
 * @member {boolean} [isBillable] If the subscription can be used for billing
 */
export interface AzureSubscriptionResponse {
  subscriptionId: string;
  tenantId: string;
  subscriptionName: string;
  isBilling?: boolean;
  isBillable?: boolean;
}

/**
 * @class
 * Initializes a new instance of the BasicAppResponse class.
 * @constructor
 * @member {string} id The unique ID (UUID) of the app
 * @member {string} [description] The description of the app
 * @member {string} displayName The display name of the app
 * @member {string} [iconUrl] The string representation of the URL pointing to
 * the app's icon
 * @member {string} name The name of the app used in URLs
 * @member {string} os The OS the app will be running on. Possible values
 * include: 'Android', 'iOS', 'macOS', 'Tizen', 'tvOS', 'Windows', 'Custom'
 * @member {object} owner
 * @member {string} [owner.id] The unique id (UUID) of the owner
 * @member {string} [owner.avatarUrl] The avatar URL of the owner
 * @member {string} [owner.displayName] The owner's display name
 * @member {string} [owner.email] The owner's email address
 * @member {string} [owner.name] The unique name that used to identify the
 * owner
 * @member {string} [owner.type] The owner type. Can either be 'org' or 'user'.
 * Possible values include: 'org', 'user'
 */
export interface BasicAppResponse {
  id: string;
  description?: string;
  displayName: string;
  iconUrl?: string;
  name: string;
  os: string;
  owner: Owner;
}

/**
 * @class
 * Initializes a new instance of the AppResponse class.
 * @constructor
 * @member {string} [appSecret] A unique and secret key used to identify the
 * app in communication with the ingestion endpoint for crash reporting and
 * analytics
 * @member {object} [azureSubscription]
 * @member {string} [azureSubscription.subscriptionId] The azure subscription
 * id
 * @member {string} [azureSubscription.tenantId] The tenant id of the azure
 * subscription belongs to
 * @member {string} [azureSubscription.subscriptionName] The name of the azure
 * subscription
 * @member {boolean} [azureSubscription.isBilling] If the subscription is used
 * for billing
 * @member {boolean} [azureSubscription.isBillable] If the subscription can be
 * used for billing
 * @member {string} [platform] The platform of the app. Possible values
 * include: 'Java', 'Objective-C-Swift', 'UWP', 'Cordova', 'React-Native',
 * 'Unity', 'Xamarin', 'Unknown'
 * @member {string} [origin] The creation origin of this app. Possible values
 * include: 'appcenter', 'hockeyapp', 'codepush'
 * @member {string} [createdAt] The created date of this app
 * @member {string} [updatedAt] The last updated date of this app
 * @member {array} [memberPermissions] The permissions of the calling user
 */
export interface AppResponse extends BasicAppResponse {
  appSecret?: string;
  azureSubscription?: AzureSubscriptionResponse;
  platform?: string;
  origin?: string;
  createdAt?: string;
  updatedAt?: string;
  memberPermissions?: string[];
}

/**
 * @class
 * Initializes a new instance of the UserProfileResponse class.
 * @constructor
 * @member {string} id The unique id (UUID) of the user
 * @member {string} [avatarUrl] The avatar URL of the user
 * @member {boolean} [canChangePassword] User is required to send an old
 * password in order to change the password.
 * @member {string} displayName The full name of the user. Might for example be
 * first and last name
 * @member {string} email The email address of the user
 * @member {string} name The unique name that is used to identify the user.
 * @member {array} [permissions] The permissions the user has for the app
 * @member {string} origin The creation origin of this user. Possible values
 * include: 'appcenter', 'hockeyapp', 'codepush'
 */
export interface UserProfileResponse {
  id: string;
  avatarUrl?: string;
  canChangePassword?: boolean;
  displayName: string;
  email: string;
  name: string;
  permissions?: string[];
  origin: string;
}

/**
 * @class
 * Initializes a new instance of the AppInvitationDetailResponse class.
 * @constructor
 * @member {string} id The unique ID (UUID) of the invitation
 * @member {object} app
 * @member {string} [app.appSecret] A unique and secret key used to identify
 * the app in communication with the ingestion endpoint for crash reporting and
 * analytics
 * @member {object} [app.azureSubscription]
 * @member {string} [app.azureSubscription.subscriptionId] The azure
 * subscription id
 * @member {string} [app.azureSubscription.tenantId] The tenant id of the azure
 * subscription belongs to
 * @member {string} [app.azureSubscription.subscriptionName] The name of the
 * azure subscription
 * @member {boolean} [app.azureSubscription.isBilling] If the subscription is
 * used for billing
 * @member {boolean} [app.azureSubscription.isBillable] If the subscription can
 * be used for billing
 * @member {string} [app.platform] The platform of the app. Possible values
 * include: 'Java', 'Objective-C-Swift', 'UWP', 'Cordova', 'React-Native',
 * 'Unity', 'Xamarin', 'Unknown'
 * @member {string} [app.origin] The creation origin of this app. Possible
 * values include: 'appcenter', 'hockeyapp', 'codepush'
 * @member {string} [app.createdAt] The created date of this app
 * @member {string} [app.updatedAt] The last updated date of this app
 * @member {array} [app.memberPermissions] The permissions of the calling user
 * @member {string} email The email address of the invited user
 * @member {string} inviteType The invitation type. Possible values include:
 * 'developer', 'tester'
 * @member {object} invitedBy
 * @member {string} [invitedBy.id] The unique id (UUID) of the user
 * @member {string} [invitedBy.avatarUrl] The avatar URL of the user
 * @member {boolean} [invitedBy.canChangePassword] User is required to send an
 * old password in order to change the password.
 * @member {string} [invitedBy.displayName] The full name of the user. Might
 * for example be first and last name
 * @member {string} [invitedBy.email] The email address of the user
 * @member {string} [invitedBy.name] The unique name that is used to identify
 * the user.
 * @member {array} [invitedBy.permissions] The permissions the user has for the
 * app
 * @member {string} [invitedBy.origin] The creation origin of this user.
 * Possible values include: 'appcenter', 'hockeyapp', 'codepush'
 * @member {boolean} isExistingUser Indicates whether the invited user already
 * exists
 * @member {array} [permissions] The permissions the user has for the app
 */
export interface AppInvitationDetailResponse {
  id: string;
  app: AppResponse;
  email: string;
  inviteType: string;
  invitedBy: UserProfileResponse;
  isExistingUser: boolean;
  permissions?: string[];
}

/**
 * @class
 * Initializes a new instance of the AppPatchRequest class.
 * @constructor
 * @member {string} [description] A short text describing the app
 * @member {string} [displayName] The display name of the app
 * @member {string} [name] The name of the app used in URLs
 * @member {string} [iconUrl] The string representation of the URL pointing to
 * the app's icon
 */
export interface AppPatchRequest {
  description?: string;
  displayName?: string;
  name?: string;
  iconUrl?: string;
}

/**
 * @class
 * Initializes a new instance of the AppRequest class.
 * @constructor
 * @member {string} [description] A short text describing the app
 * @member {string} displayName The descriptive name of the app. This can
 * contain any characters
 * @member {string} [name] The name of the app used in URLs
 * @member {string} os The OS the app will be running on. Possible values
 * include: 'Android', 'iOS', 'macOS', 'Tizen', 'tvOS', 'Windows'
 * @member {string} platform The platform of the app. Possible values include:
 * 'Java', 'Objective-C-Swift', 'UWP', 'Cordova', 'React-Native', 'Xamarin'
 */
export interface AppRequest {
  description?: string;
  displayName: string;
  name?: string;
  os: string;
  platform: string;
}

/**
 * @class
 * Initializes a new instance of the AppTeamAddRequest class.
 * @constructor
 * @member {string} name The name of the app to be added to the team
 */
export interface AppTeamAddRequest {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the AppWithTeamPermissionsResponse class.
 * @constructor
 * @member {array} [teamPermissions] The permissions the team has for the app
 */
export interface AppWithTeamPermissionsResponse extends AppResponse {
  teamPermissions?: string[];
}

/**
 * @class
 * Initializes a new instance of the AzureSubscriptionAddToAppRequest class.
 * @constructor
 * @member {string} subscriptionId The azure subscription id
 */
export interface AzureSubscriptionAddToAppRequest {
  subscriptionId: string;
}

/**
 * @class
 * Initializes a new instance of the Owner class.
 * @constructor
 * The information about the app's owner
 *
 * @member {string} id The unique id (UUID) of the owner
 * @member {string} [avatarUrl] The avatar URL of the owner
 * @member {string} displayName The owner's display name
 * @member {string} [email] The owner's email address
 * @member {string} name The unique name that used to identify the owner
 * @member {string} type The owner type. Can either be 'org' or 'user'.
 * Possible values include: 'org', 'user'
 */
export interface Owner {
  id: string;
  avatarUrl?: string;
  displayName: string;
  email?: string;
  name: string;
  type: string;
}

/**
 * @class
 * Initializes a new instance of the DistributionGroupPatchRequest class.
 * @constructor
 * @member {string} [name] The name of the distribution group
 * @member {boolean} [isPublic] Whether the distribution group is public
 */
export interface DistributionGroupPatchRequest {
  name?: string;
  isPublic?: boolean;
}

/**
 * @class
 * Initializes a new instance of the DistributionGroupRequest class.
 * @constructor
 * @member {string} name The name of the distribution group
 */
export interface DistributionGroupRequest {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the DistributionGroupResponse class.
 * @constructor
 * @member {string} id The unique ID of the distribution group
 * @member {string} name The name of the distribution group used in URLs
 * @member {string} origin The creation origin of this distribution group.
 * Possible values include: 'appcenter', 'hockeyapp'
 * @member {boolean} isPublic Whether the distribution group is public
 */
export interface DistributionGroupResponse {
  id: string;
  name: string;
  origin: string;
  isPublic: boolean;
}

/**
 * @class
 * Initializes a new instance of the DistributionGroupUserDeleteResponse class.
 * @constructor
 * @member {string} [code] The code of the result
 * @member {number} [message] The message of the result
 * @member {number} status The status code of the result
 * @member {string} [userEmail] The email of the user
 */
export interface DistributionGroupUserDeleteResponse {
  code?: string;
  message?: number;
  status: number;
  userEmail?: string;
}

/**
 * @class
 * Initializes a new instance of the DistributionGroupUserGetResponse class.
 * @constructor
 * @member {string} [id] The unique id (UUID) of the user
 * @member {string} [avatarUrl] The avatar URL of the user
 * @member {boolean} [canChangePassword] User is required to send an old
 * password in order to change the password.
 * @member {string} [displayName] The full name of the user. Might for example
 * be first and last name
 * @member {string} email The email address of the user
 * @member {boolean} [invitePending] Whether the has accepted the invite.
 * Available when an invite is pending, and the value will be "true".
 * @member {string} [name] The unique name that is used to identify the user.
 */
export interface DistributionGroupUserGetResponse {
  id?: string;
  avatarUrl?: string;
  canChangePassword?: boolean;
  displayName?: string;
  email: string;
  invitePending?: boolean;
  name?: string;
}

/**
 * @class
 * Initializes a new instance of the DistributionGroupUserPostResponse class.
 * @constructor
 * @member {string} [code] The code of the result
 * @member {boolean} [invitePending] Whether the has accepted the invite.
 * Available when an invite is pending, and the value will be "true".
 * @member {number} [message] The message of the result
 * @member {number} status The status code of the result
 * @member {string} [userEmail] The email of the user
 */
export interface DistributionGroupUserPostResponse {
  code?: string;
  invitePending?: boolean;
  message?: number;
  status: number;
  userEmail?: string;
}

/**
 * @class
 * Initializes a new instance of the DistributionGroupUserRequest class.
 * @constructor
 * @member {array} [userEmails] The list of emails of the users
 */
export interface DistributionGroupUserRequest {
  userEmails?: string[];
}

/**
 * @class
 * Initializes a new instance of the OrganizationInvitationSimpleDetailResponse class.
 * @constructor
 * @member {string} id The unique ID (UUID) of the invitation
 * @member {string} email The email address of the invited user
 */
export interface OrganizationInvitationSimpleDetailResponse {
  id: string;
  email: string;
}

/**
 * @class
 * Initializes a new instance of the OrganizationPatchRequest class.
 * @constructor
 * @member {string} [displayName] The full (friendly) name of the organization.
 * @member {string} [name] The name of the organization used in URLs
 */
export interface OrganizationPatchRequest {
  displayName?: string;
  name?: string;
}

/**
 * @class
 * Initializes a new instance of the OrganizationRequest class.
 * @constructor
 * @member {string} [displayName] The display name of the organization
 * @member {string} [name] The name of the organization used in URLs
 */
export interface OrganizationRequest {
  displayName?: string;
  name?: string;
}

/**
 * @class
 * Initializes a new instance of the OrganizationResponse class.
 * @constructor
 * @member {string} id The internal unique id (UUID) of the organization.
 * @member {string} displayName The display name of the organization
 * @member {string} name The slug name of the organization
 * @member {string} origin The creation origin of this organization. Possible
 * values include: 'appcenter', 'hockeyapp'
 * @member {string} createdAt The creation date of this organization
 * @member {string} updatedAt The date the organization was last updated at
 */
export interface OrganizationResponse {
  id: string;
  displayName: string;
  name: string;
  origin: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * @class
 * Initializes a new instance of the OrganizationUserPatchRequest class.
 * @constructor
 * @member {string} [role] The user's role in the organizatiion. Possible
 * values include: 'admin', 'collaborator'
 */
export interface OrganizationUserPatchRequest {
  role?: string;
}

/**
 * @class
 * Initializes a new instance of the OrganizationUserResponse class.
 * @constructor
 * @member {string} email The email address of the user
 * @member {string} displayName The full name of the user. Might for example be
 * first and last name
 * @member {string} joinedAt The date when the user joined the organization
 * @member {string} name The unique name that is used to identify the user.
 * @member {string} role The role the user has within the organization
 */
export interface OrganizationUserResponse {
  email: string;
  displayName: string;
  joinedAt: string;
  name: string;
  role: string;
}

/**
 * @class
 * Initializes a new instance of the TeamResponse class.
 * @constructor
 * @member {string} id The internal unique id (UUID) of the team.
 * @member {string} name The name of the team
 * @member {string} displayName The display name of the team
 * @member {string} [description] The description of the team
 */
export interface TeamResponse {
  id: string;
  name: string;
  displayName: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the TeamAppResponse class.
 * @constructor
 * @member {array} [permissions] The permissions the team has for the app
 */
export interface TeamAppResponse extends TeamResponse {
  permissions?: string[];
}

/**
 * @class
 * Initializes a new instance of the TeamAppUpdateRequest class.
 * @constructor
 * @member {array} permissions The permissions all members of the team have on
 * the app
 */
export interface TeamAppUpdateRequest {
  permissions: string[];
}

/**
 * @class
 * Initializes a new instance of the TeamRequest class.
 * @constructor
 * @member {string} displayName The display name of the team
 * @member {string} [name] The name of the team
 * @member {string} [description] The description of the team
 */
export interface TeamRequest {
  displayName: string;
  name?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the TeamUserResponse class.
 * @constructor
 * @member {string} email The email address of the user
 * @member {string} displayName The full name of the user. Might for example be
 * first and last name
 * @member {string} name The unique name that is used to identify the user.
 * @member {object} role The role of the user has within the team
 */
export interface TeamUserResponse {
  email: string;
  displayName: string;
  name: string;
  role: any;
}

/**
 * @class
 * Initializes a new instance of the UserAppPermissionsUpdateRequest class.
 * @constructor
 * @member {array} permissions The permissions the user has for the app
 */
export interface UserAppPermissionsUpdateRequest {
  permissions: string[];
}

/**
 * @class
 * Initializes a new instance of the UserEmailRequest class.
 * @constructor
 * @member {string} userEmail The user's email address'
 */
export interface UserEmailRequest {
  userEmail: string;
}

/**
 * @class
 * Initializes a new instance of the UserInvitationPermissionsUpdateRequest class.
 * @constructor
 * @member {array} permissions The permissions the user has for the app in the
 * invitation
 */
export interface UserInvitationPermissionsUpdateRequest {
  permissions: string[];
}

/**
 * @class
 * Initializes a new instance of the UserUpdateRequest class.
 * @constructor
 * @member {string} [displayName] The full name of the user. Might for example
 * be first and last name
 */
export interface UserUpdateRequest {
  displayName?: string;
}

/**
 * @class
 * Initializes a new instance of the ListOKResponseItem class.
 * @constructor
 * @member {string} [displayName] The display name of the organization
 * @member {string} [name] The slug name of the organization
 * @member {string} [origin] The creation origin of this organization. Possible
 * values include: 'appcenter', 'hockeyapp'
 */
export interface ListOKResponseItem {
  displayName?: string;
  name?: string;
  origin?: string;
}