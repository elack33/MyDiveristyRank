DROP TABLE IF EXISTS 
    DataDetail, Answers, Questions, Career, Orientation,
    Interests, Gender, BirthYear, Demographics;

CREATE TABLE Demographics (
	ID INT NOT NULL AUTO_INCREMENT,
    DemoGraphic nchar varchar(100) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE BirthYear (
	ID INT NOT NULL AUTO_INCREMENT,
    BirthYear SmallINT NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE Gender (
	ID INT NOT NULL AUTO_INCREMENT,
    Gender nchar varchar(50) NOT NULL,
    primary key (ID)
);

CREATE TABLE Interests (
	ID INT NOT NULL AUTO_INCREMENT,
    Interests nchar varchar(100) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE Orientation (
	ID INT NOT NULL AUTO_INCREMENT,
    Orientation nchar varchar(100) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE Career (
	ID INT NOT NULL AUTO_INCREMENT,
    CareerType nchar varchar(100) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE Questions (
	ID INT NOT NULL AUTO_INCREMENT,
    Question nvarchar (5000) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE Answers (
	ID INT NOT NULL AUTO_INCREMENT,
    Q_ID INT NOT NULL,
    Answer nvarchar (20000),
    PRIMARY KEY (ID),
    FOREIGN KEY (Q_ID)
      REFERENCES Questions(ID)
);

CREATE TABLE DataDetail (
    ID INT NOT NULL AUTO_INCREMENT,
    Demo_ID INT NOT NULL,
    BirthYear_ID INT NOT NULL,
    Gender_ID INT NOT NULL,
    Interests_ID INT NOT NULL,
    Orientation_ID INT NOT NULL,
    Career_ID INT NOT NULL,

    PRIMARY KEY (ID),

    FOREIGN KEY (Demo_ID)
        REFERENCES Demographics(ID),
    FOREIGN KEY (BirthYear_ID)
        REFERENCES BirthYear(ID),
    FOREIGN KEY (Gender_ID)
        REFERENCES Gender(ID),
    FOREIGN KEY (Interests_ID)
        REFERENCES Interests(ID),
    FOREIGN KEY (Orientation_ID)
        REFERENCES Orientation(ID),
    FOREIGN KEY (Career_ID)
        REFERENCES Career(ID)
);

























