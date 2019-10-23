CREATE TABLE Quadra
(
  codq int NOT NULL,
  diasPreAgendamento int NOT NULL,
  ativo boolean DEFAULT true,
  PRIMARY KEY (codq)
),
CREATE TABLE Evento
(
  codev int NOT NULL,
  horarioComeco timestamp NOT NULL,
  horarioFim timestamp NOT NULL,
  ativo boolean DEFAULT true,
  PRIMARY KEY (codev)
),
CREATE TABLE Tipo
(
  codt int NOT NULL,
  descricao varchar(50),
  ativo boolean DEFAULT true,
  PRIMARY KEY (codt)
),
CREATE TABLE Pessoa
(
  codp int NOT NULL,
  cpf char(11) NOT NULL,
  senha varchar(100) NOT NULL,
  codt int NOT NULL,
  ativo boolean DEFAULT true,
  PRIMARY KEY (codp),
  FOREIGN KEY (codt)
    REFERENCES Tipo(codt) MATCH SIMPLE ON DELETE RESTRICT ON UPDATE CASCADE 
),
CREATE TABLE Permissoes
(
  codperm int NOT NULL,
  codp int NOT NULL,
  codq int NOT NULL,
  ativo boolean DEFAULT true,
  PRIMARY KEY (codperm),
  FOREIGN KEY (codp)
    REFERENCES Pessoa(codp) MATCH SIMPLE ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (codq)
    REFERENCES Quadra(codq) MATCH SIMPLE ON DELETE CASCADE ON UPDATE CASCADE
),
CREATE TABLE Agendamento
(
  coda int NOT NULL,
  codp int NOT NULL,
  codq int NOT NULL,
  comparecimento bool,
  horarioComeco timestamp NOT NULL,
  horarioFim timestamp NOT NULL,
  ativo boolean DEFAULT true,
  PRIMARY KEY (coda),
  FOREIGN KEY (codq)
    REFERENCES Quadra(codq) MATCH SIMPLE ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (codp)
    REFERENCES Pessoa(codp) MATCH SIMPLE ON DELETE CASCADE ON UPDATE CASCADE
)