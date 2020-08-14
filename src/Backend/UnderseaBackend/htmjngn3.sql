IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [ApplicationLog] (
    [Id] uniqueidentifier NOT NULL,
    [StackTrace] nvarchar(max) NULL,
    [DateTime] datetime2 NOT NULL,
    [Message] nvarchar(max) NULL,
    CONSTRAINT [PK_ApplicationLog] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Armies] (
    [Id] uniqueidentifier NOT NULL,
    [CityId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_Armies] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [AspNetRoles] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(256) NULL,
    [NormalizedName] nvarchar(256) NULL,
    [ConcurrencyStamp] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetRoles] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [AspNetUsers] (
    [Id] uniqueidentifier NOT NULL,
    [UserName] nvarchar(256) NULL,
    [NormalizedUserName] nvarchar(256) NULL,
    [Email] nvarchar(256) NULL,
    [NormalizedEmail] nvarchar(256) NULL,
    [EmailConfirmed] bit NOT NULL,
    [PasswordHash] nvarchar(max) NULL,
    [SecurityStamp] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(max) NULL,
    [PhoneNumber] nvarchar(max) NULL,
    [PhoneNumberConfirmed] bit NOT NULL,
    [TwoFactorEnabled] bit NOT NULL,
    [LockoutEnd] datetimeoffset NULL,
    [LockoutEnabled] bit NOT NULL,
    [AccessFailedCount] int NOT NULL,
    CONSTRAINT [PK_AspNetUsers] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [BuildingAttributes] (
    [BuildingType] int NOT NULL,
    [Id] uniqueidentifier NOT NULL,
    [Resident] int NOT NULL,
    [Coral] int NOT NULL,
    [HostCapacity] int NOT NULL,
    [Name] nvarchar(max) NULL,
    [Price] int NOT NULL,
    CONSTRAINT [PK_BuildingAttributes] PRIMARY KEY ([BuildingType])
);

GO

CREATE TABLE [Game] (
    [Id] uniqueidentifier NOT NULL,
    [CurrentTurn] int NOT NULL,
    CONSTRAINT [PK_Game] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Units] (
    [UnitType] int NOT NULL,
    [Price] int NOT NULL,
    [FoodNecessity] int NOT NULL,
    [PearlNecessity] int NOT NULL,
    [Damage] int NOT NULL,
    [Defense] int NOT NULL,
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(max) NULL,
    CONSTRAINT [PK_Units] PRIMARY KEY ([UnitType])
);

GO

CREATE TABLE [UpgradeAttributes] (
    [UpgradeType] int NOT NULL,
    [Id] uniqueidentifier NOT NULL,
    [CoralProduction] int NOT NULL,
    [DefensePoints] int NOT NULL,
    [AttackPoints] int NOT NULL,
    [TaxIncrease] int NOT NULL,
    [Name] nvarchar(max) NULL,
    CONSTRAINT [PK_UpgradeAttributes] PRIMARY KEY ([UpgradeType])
);

GO

CREATE TABLE [ArmyUnits] (
    [ArmyId] uniqueidentifier NOT NULL,
    [UnitType] int NOT NULL,
    [UnitCount] int NOT NULL,
    [Id] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_ArmyUnits] PRIMARY KEY ([ArmyId], [UnitType]),
    CONSTRAINT [FK_ArmyUnits_Armies_ArmyId] FOREIGN KEY ([ArmyId]) REFERENCES [Armies] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [AspNetRoleClaims] (
    [Id] int NOT NULL IDENTITY,
    [RoleId] uniqueidentifier NOT NULL,
    [ClaimType] nvarchar(max) NULL,
    [ClaimValue] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [AspNetUserClaims] (
    [Id] int NOT NULL IDENTITY,
    [UserId] uniqueidentifier NOT NULL,
    [ClaimType] nvarchar(max) NULL,
    [ClaimValue] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [AspNetUserLogins] (
    [LoginProvider] nvarchar(450) NOT NULL,
    [ProviderKey] nvarchar(450) NOT NULL,
    [ProviderDisplayName] nvarchar(max) NULL,
    [UserId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY ([LoginProvider], [ProviderKey]),
    CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [AspNetUserRoles] (
    [UserId] uniqueidentifier NOT NULL,
    [RoleId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY ([UserId], [RoleId]),
    CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [AspNetUserTokens] (
    [UserId] uniqueidentifier NOT NULL,
    [LoginProvider] nvarchar(450) NOT NULL,
    [Name] nvarchar(450) NOT NULL,
    [Value] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY ([UserId], [LoginProvider], [Name]),
    CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [Cities] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(max) NULL,
    [UserId] uniqueidentifier NOT NULL,
    [Inhabitants] int NOT NULL,
    [PearlCount] int NOT NULL,
    [PearlProduction] int NOT NULL,
    [CoralCount] int NOT NULL,
    [CoralProduction] int NOT NULL,
    [Points] int NOT NULL,
    [AvailableArmyId] uniqueidentifier NOT NULL,
    [UpgradesId] uniqueidentifier NOT NULL,
    [BuildingId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_Cities] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Cities_Armies_AvailableArmyId] FOREIGN KEY ([AvailableArmyId]) REFERENCES [Armies] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Cities_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [Attacks] (
    [Id] uniqueidentifier NOT NULL,
    [AttackerCityId] uniqueidentifier NOT NULL,
    [DefenderCityId] uniqueidentifier NOT NULL,
    [ArmyId] uniqueidentifier NOT NULL,
    [WasAttackSuccesful] bit NULL,
    CONSTRAINT [PK_Attacks] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Attacks_Armies_ArmyId] FOREIGN KEY ([ArmyId]) REFERENCES [Armies] ([Id]),
    CONSTRAINT [FK_Attacks_Cities_AttackerCityId] FOREIGN KEY ([AttackerCityId]) REFERENCES [Cities] ([Id]),
    CONSTRAINT [FK_Attacks_Cities_DefenderCityId] FOREIGN KEY ([DefenderCityId]) REFERENCES [Cities] ([Id])
);

GO

CREATE TABLE [Building] (
    [Id] uniqueidentifier NOT NULL,
    [CityId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_Building] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Building_Cities_CityId] FOREIGN KEY ([CityId]) REFERENCES [Cities] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [Spyings] (
    [Id] uniqueidentifier NOT NULL,
    [AttackerCityId] uniqueidentifier NOT NULL,
    [DefenderCityId] uniqueidentifier NOT NULL,
    [SpyCount] int NOT NULL,
    [WasSpyingSuccesful] bit NULL,
    [DefendingPower] int NULL,
    CONSTRAINT [PK_Spyings] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Spyings_Cities_AttackerCityId] FOREIGN KEY ([AttackerCityId]) REFERENCES [Cities] ([Id]),
    CONSTRAINT [FK_Spyings_Cities_DefenderCityId] FOREIGN KEY ([DefenderCityId]) REFERENCES [Cities] ([Id])
);

GO

CREATE TABLE [Upgrades] (
    [Id] uniqueidentifier NOT NULL,
    [CityId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_Upgrades] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Upgrades_Cities_CityId] FOREIGN KEY ([CityId]) REFERENCES [Cities] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [CityBuildingsJoin] (
    [BuildingId] uniqueidentifier NOT NULL,
    [BuildingType] int NOT NULL,
    [Status] int NOT NULL,
    [Id] uniqueidentifier NOT NULL,
    [Quantity] int NOT NULL,
    [CurrentTurn] int NOT NULL,
    CONSTRAINT [PK_CityBuildingsJoin] PRIMARY KEY ([BuildingId], [BuildingType]),
    CONSTRAINT [FK_CityBuildingsJoin_Building_BuildingId] FOREIGN KEY ([BuildingId]) REFERENCES [Building] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [CityUpgradesJoin] (
    [UpgradeId] uniqueidentifier NOT NULL,
    [UpgradeType] int NOT NULL,
    [CurrentTurn] int NOT NULL,
    [Status] int NOT NULL,
    [Id] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_CityUpgradesJoin] PRIMARY KEY ([UpgradeId], [UpgradeType]),
    CONSTRAINT [FK_CityUpgradesJoin_Upgrades_UpgradeId] FOREIGN KEY ([UpgradeId]) REFERENCES [Upgrades] ([Id]) ON DELETE CASCADE
);

GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'BuildingType', N'Coral', N'HostCapacity', N'Id', N'Name', N'Price', N'Resident') AND [object_id] = OBJECT_ID(N'[BuildingAttributes]'))
    SET IDENTITY_INSERT [BuildingAttributes] ON;
INSERT INTO [BuildingAttributes] ([BuildingType], [Coral], [HostCapacity], [Id], [Name], [Price], [Resident])
VALUES (0, 200, 0, '00000000-0000-0000-0000-000000000000', N'Áramlásírányító', 1000, 50),
(1, 0, 200, '00000000-0000-0000-0000-000000000000', N'Zátonyvár', 1000, 0);
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'BuildingType', N'Coral', N'HostCapacity', N'Id', N'Name', N'Price', N'Resident') AND [object_id] = OBJECT_ID(N'[BuildingAttributes]'))
    SET IDENTITY_INSERT [BuildingAttributes] OFF;

GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'CurrentTurn') AND [object_id] = OBJECT_ID(N'[Game]'))
    SET IDENTITY_INSERT [Game] ON;
INSERT INTO [Game] ([Id], [CurrentTurn])
VALUES ('b00dc707-e296-4dc3-b241-483a7314aacb', 1);
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'CurrentTurn') AND [object_id] = OBJECT_ID(N'[Game]'))
    SET IDENTITY_INSERT [Game] OFF;

GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'UnitType', N'Damage', N'Defense', N'FoodNecessity', N'Id', N'Name', N'PearlNecessity', N'Price') AND [object_id] = OBJECT_ID(N'[Units]'))
    SET IDENTITY_INSERT [Units] ON;
INSERT INTO [Units] ([UnitType], [Damage], [Defense], [FoodNecessity], [Id], [Name], [PearlNecessity], [Price])
VALUES (2, 2, 6, 1, '00000000-0000-0000-0000-000000000000', N'Csatacsikó', 1, 50),
(1, 6, 2, 1, '00000000-0000-0000-0000-000000000000', N'Rohamfóka', 1, 50),
(0, 5, 5, 2, '00000000-0000-0000-0000-000000000000', N'Lézercápa', 3, 100),
(3, 0, 0, 2, '00000000-0000-0000-0000-000000000000', N'Hadvezér', 4, 200),
(4, 0, 0, 1, '00000000-0000-0000-0000-000000000000', N'Felfedező', 1, 50);
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'UnitType', N'Damage', N'Defense', N'FoodNecessity', N'Id', N'Name', N'PearlNecessity', N'Price') AND [object_id] = OBJECT_ID(N'[Units]'))
    SET IDENTITY_INSERT [Units] OFF;

GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'UpgradeType', N'AttackPoints', N'CoralProduction', N'DefensePoints', N'Id', N'Name', N'TaxIncrease') AND [object_id] = OBJECT_ID(N'[UpgradeAttributes]'))
    SET IDENTITY_INSERT [UpgradeAttributes] ON;
INSERT INTO [UpgradeAttributes] ([UpgradeType], [AttackPoints], [CoralProduction], [DefensePoints], [Id], [Name], [TaxIncrease])
VALUES (0, 0, 10, 0, '00000000-0000-0000-0000-000000000000', N'Iszaptraktor', 0),
(5, 0, 0, 0, 'ac6bc18b-fff8-4792-a9ef-c485a37110e0', N'Alkímia', 30),
(1, 0, 15, 0, '00000000-0000-0000-0000-000000000000', N'Iszapkombájn', 0),
(2, 0, 0, 20, '00000000-0000-0000-0000-000000000000', N'Korallfal', 0),
(3, 20, 0, 0, '00000000-0000-0000-0000-000000000000', N'Szonárágyú', 0),
(4, 10, 0, 10, '00000000-0000-0000-0000-000000000000', N'Vízalatti Harcműveszetek', 0);
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'UpgradeType', N'AttackPoints', N'CoralProduction', N'DefensePoints', N'Id', N'Name', N'TaxIncrease') AND [object_id] = OBJECT_ID(N'[UpgradeAttributes]'))
    SET IDENTITY_INSERT [UpgradeAttributes] OFF;

GO

CREATE INDEX [IX_AspNetRoleClaims_RoleId] ON [AspNetRoleClaims] ([RoleId]);

GO

CREATE UNIQUE INDEX [RoleNameIndex] ON [AspNetRoles] ([NormalizedName]) WHERE [NormalizedName] IS NOT NULL;

GO

CREATE INDEX [IX_AspNetUserClaims_UserId] ON [AspNetUserClaims] ([UserId]);

GO

CREATE INDEX [IX_AspNetUserLogins_UserId] ON [AspNetUserLogins] ([UserId]);

GO

CREATE INDEX [IX_AspNetUserRoles_RoleId] ON [AspNetUserRoles] ([RoleId]);

GO

CREATE INDEX [EmailIndex] ON [AspNetUsers] ([NormalizedEmail]);

GO

CREATE UNIQUE INDEX [UserNameIndex] ON [AspNetUsers] ([NormalizedUserName]) WHERE [NormalizedUserName] IS NOT NULL;

GO

CREATE UNIQUE INDEX [IX_Attacks_ArmyId] ON [Attacks] ([ArmyId]);

GO

CREATE INDEX [IX_Attacks_AttackerCityId] ON [Attacks] ([AttackerCityId]);

GO

CREATE INDEX [IX_Attacks_DefenderCityId] ON [Attacks] ([DefenderCityId]);

GO

CREATE UNIQUE INDEX [IX_Building_CityId] ON [Building] ([CityId]);

GO

CREATE UNIQUE INDEX [IX_Cities_AvailableArmyId] ON [Cities] ([AvailableArmyId]);

GO

CREATE INDEX [IX_Cities_UserId] ON [Cities] ([UserId]);

GO

CREATE INDEX [IX_Spyings_AttackerCityId] ON [Spyings] ([AttackerCityId]);

GO

CREATE INDEX [IX_Spyings_DefenderCityId] ON [Spyings] ([DefenderCityId]);

GO

CREATE UNIQUE INDEX [IX_Upgrades_CityId] ON [Upgrades] ([CityId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200727142158_Init', N'3.1.5');

GO

