USE [DVDLibrary]
GO

/****** Object:  Table [dbo].[DVDs]    Script Date: 10/16/2015 2:11:39 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[DVDs](
	[DVDID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](140) NOT NULL,
	[ReleaseDate] [date] NULL,
	[MPAA] [varchar](10) NULL,
	[Director] [varchar](90) NULL,
	[StudioID] [int] NULL,
	[IsInCollection] [bit] NULL,
 CONSTRAINT [PK_DVDs] PRIMARY KEY CLUSTERED 
(
	[DVDID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

ALTER TABLE [dbo].[DVDs] ADD  CONSTRAINT [DF_DVDs_IsInCollection]  DEFAULT ((1)) FOR [IsInCollection]
GO

------


USE [DVDLibrary]
GO

/****** Object:  Table [dbo].[MPAA]    Script Date: 10/16/2015 2:13:29 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[MPAA](
	[MPAA] [varchar](10) NOT NULL,
	[MPAADescription] [varchar](150) NOT NULL,
 CONSTRAINT [PK_MPAA] PRIMARY KEY CLUSTERED 
(
	[MPAA] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO



------


USE [DVDLibrary]
GO

/****** Object:  Table [dbo].[Studios]    Script Date: 10/16/2015 2:14:01 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Studios](
	[StudioID] [int] IDENTITY(1,1) NOT NULL,
	[StudioName] [nchar](90) NOT NULL,
 CONSTRAINT [PK_Studios] PRIMARY KEY CLUSTERED 
(
	[StudioID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO





-----



USE [DVDLibrary]
GO

/****** Object:  Table [dbo].[DVDBorrowerDetails]    Script Date: 10/16/2015 2:14:18 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[DVDBorrowerDetails](
	[DVDID] [int] NOT NULL,
	[BorrowerID] [int] NOT NULL,
	[DateBorrowed] [date] NOT NULL,
	[DateReturned] [date] NULL
) ON [PRIMARY]

GO



------




USE [DVDLibrary]
GO

/****** Object:  Table [dbo].[Borrowers]    Script Date: 10/16/2015 2:14:31 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[Borrowers](
	[BorrowerID] [int] IDENTITY(1,1) NOT NULL,
	[BorrowerName] [varchar](90) NOT NULL,
 CONSTRAINT [PK_Borrowers] PRIMARY KEY CLUSTERED 
(
	[BorrowerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO




-------



USE [DVDLibrary]
GO

/****** Object:  Table [dbo].[UserNotesDVDDetails]    Script Date: 10/16/2015 2:15:05 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[UserNotesDVDDetails](
	[DVDID] [int] NOT NULL,
	[UserNoteID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NOT NULL,
	[Rating] [int] NOT NULL,
	[UserNotesDescription] [varchar](140) NULL,
 CONSTRAINT [PK_UserNotesDVDDetails] PRIMARY KEY CLUSTERED 
(
	[UserNoteID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO




-------


USE [DVDLibrary]
GO

/****** Object:  Table [dbo].[Users]    Script Date: 10/16/2015 2:16:13 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[Users](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](90) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO



-------




USE [DVDLibrary]
GO

/****** Object:  Table [dbo].[DVDActorDetails]    Script Date: 10/16/2015 2:16:31 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[DVDActorDetails](
	[DVDID] [int] NOT NULL,
	[ActorID] [int] NOT NULL
) ON [PRIMARY]

GO




-------



USE [DVDLibrary]
GO

/****** Object:  Table [dbo].[Actors]    Script Date: 10/16/2015 2:16:44 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[Actors](
	[ActorID] [int] IDENTITY(1,1) NOT NULL,
	[ActorName] [varchar](90) NOT NULL,
 CONSTRAINT [PK_Actors] PRIMARY KEY CLUSTERED 
(
	[ActorID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO


----------

ALTER TABLE [dbo].[DVDs]  WITH CHECK ADD  CONSTRAINT [FK_DVDs_MPAA] FOREIGN KEY([MPAA])
REFERENCES [dbo].[MPAA] ([MPAA])
GO

ALTER TABLE [dbo].[DVDs] CHECK CONSTRAINT [FK_DVDs_MPAA]
GO

ALTER TABLE [dbo].[DVDs]  WITH CHECK ADD  CONSTRAINT [FK_DVDs_Studios] FOREIGN KEY([StudioID])
REFERENCES [dbo].[Studios] ([StudioID])
GO

ALTER TABLE [dbo].[DVDs] CHECK CONSTRAINT [FK_DVDs_Studios]
GO

ALTER TABLE [dbo].[DVDBorrowerDetails]  WITH CHECK ADD  CONSTRAINT [FK_DVDBorrowerDetails_Borrowers] FOREIGN KEY([BorrowerID])
REFERENCES [dbo].[Borrowers] ([BorrowerID])
GO

ALTER TABLE [dbo].[DVDBorrowerDetails] CHECK CONSTRAINT [FK_DVDBorrowerDetails_Borrowers]
GO

ALTER TABLE [dbo].[DVDBorrowerDetails]  WITH CHECK ADD  CONSTRAINT [FK_DVDBorrowerDetails_DVDs] FOREIGN KEY([DVDID])
REFERENCES [dbo].[DVDs] ([DVDID])
GO

ALTER TABLE [dbo].[DVDBorrowerDetails] CHECK CONSTRAINT [FK_DVDBorrowerDetails_DVDs]
GO

ALTER TABLE [dbo].[UserNotesDVDDetails]  WITH CHECK ADD  CONSTRAINT [FK_UserNotesDVDDetails_DVDs] FOREIGN KEY([DVDID])
REFERENCES [dbo].[DVDs] ([DVDID])
GO

ALTER TABLE [dbo].[UserNotesDVDDetails] CHECK CONSTRAINT [FK_UserNotesDVDDetails_DVDs]
GO

ALTER TABLE [dbo].[UserNotesDVDDetails]  WITH CHECK ADD  CONSTRAINT [FK_UserNotesDVDDetails_Users] FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
GO

ALTER TABLE [dbo].[UserNotesDVDDetails] CHECK CONSTRAINT [FK_UserNotesDVDDetails_Users]
GO

ALTER TABLE [dbo].[DVDActorDetails]  WITH CHECK ADD  CONSTRAINT [FK_DVDActorDetails_Actors] FOREIGN KEY([ActorID])
REFERENCES [dbo].[Actors] ([ActorID])
GO

ALTER TABLE [dbo].[DVDActorDetails] CHECK CONSTRAINT [FK_DVDActorDetails_Actors]
GO

ALTER TABLE [dbo].[DVDActorDetails]  WITH CHECK ADD  CONSTRAINT [FK_DVDActorDetails_DVDs] FOREIGN KEY([DVDID])
REFERENCES [dbo].[DVDs] ([DVDID])
GO

ALTER TABLE [dbo].[DVDActorDetails] CHECK CONSTRAINT [FK_DVDActorDetails_DVDs]
GO