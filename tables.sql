CREATE TABLE Quadra
(
  codq serial NOT NULL,
  diasPreAgendamento int NOT NULL,
  ativo boolean DEFAULT true,
  PRIMARY KEY (codq)
);
CREATE TABLE Evento
(
  codev serial NOT NULL,
  horarioComeco timestamp NOT NULL,
  horarioFim timestamp NOT NULL,
  descricao text,
  ativo boolean DEFAULT true,
  PRIMARY KEY (codev)
);
CREATE TABLE Tipo
(
  codt serial NOT NULL,
  nome varchar(30) NOT NULL,
  ativo boolean DEFAULT true,
  PRIMARY KEY (codt)
);
CREATE TABLE Pessoa
(
  codp serial NOT NULL,
  nome varchar(30) NOT NULL,
  cpf char(11) NOT NULL,
  senha varchar(100) NOT NULL,
  codt serial NOT NULL,
  ativo boolean DEFAULT true,
  PRIMARY KEY (codp),
  FOREIGN KEY (codt)
    REFERENCES Tipo(codt) MATCH SIMPLE ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE TABLE Permissoes
(
  codperm serial NOT NULL,
  codp serial NOT NULL,
  codq serial NOT NULL,
  ativo boolean DEFAULT true,
  PRIMARY KEY (codperm),
  FOREIGN KEY (codp)
    REFERENCES Pessoa(codp) MATCH SIMPLE ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (codq)
    REFERENCES Quadra(codq) MATCH SIMPLE ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Agendamento
(
  coda serial NOT NULL,
  codp serial NOT NULL,
  codq serial NOT NULL,
  descricao text,
  comparecimento bool,
  horarioComeco timestamp NOT NULL,
  horarioFim timestamp NOT NULL,
  ativo boolean DEFAULT true,
  PRIMARY KEY (coda),
  FOREIGN KEY (codq)
    REFERENCES Quadra(codq) MATCH SIMPLE ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (codp)
    REFERENCES Pessoa(codp) MATCH SIMPLE ON DELETE CASCADE ON UPDATE CASCADE
);
