CREATE OR REPLACE FUNCTION verificaJaExisteAgendamento() RETURNS TRIGGER AS
$$
BEGIN
  IF(SELECT 1 
     FROM Agendamento
     WHERE horarioComeco <= NEW.horarioComeco
     AND horaroFim >= NEW.horarioFim
    ) THEN
      RAISE EXCEPTION 'Conflito de horário!';
    END IF;
    RETURN NEW;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER verificaJaExisteAgendamento BEFORE INSERT ON Agendamento
FOR EACH ROW EXECUTE PROCEDURE verificaJaExisteAgendamento();


----

CREATE OR REPLACE FUNCTION verificaJaExisteCPF() RETURNS TRIGGER AS
$$
BEGIN
  IF(SELECT 1
  FROM Pessoa
  WHERE cpf == NEW.cpf
  ) THEN
    RAISE EXCEPTION 'CPF já cadastrado!';
  END IF;
  RETURN NEW;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER verificaJaExisteCPF BEFORE INSERT ON Pessoa
FOR EACH ROW EXECUTE PROCEDURE verificaJaExisteCPF();

----

CREATE OR REPLACE FUNCTION eventoCancelaAgendamentos()  RETURNS TRIGGER AS
$$
DECLARE
  vcoda INTEGER;
BEGIN
  IF ( 
	  SELECT coda 
	  INTO vcoda
	  FROM Agendamento
	  WHERE (
		  (
			horarioComeco >= NEW.horarioComeco
			AND horaroComeco <= NEW.horarioFim
		  )
		  OR (
			horarioFim >= NEW.horarioComeco
			AND horarioFim <= NEW.horarioFim 
		  )
		  OR (
			horarioComeco <= NEW.horarioComeco
			AND horarioFim >= NEW.horarioFim
		  )
	  )
  ) 
  IS NOT NULL THEN
    UPDATE Agendamento SET ativo = 0
    WHERE coda = vcoda;
  END IF;
  RETURN NEW;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER eventoCancelaAgendamentos BEFORE INSERT ON Evento
FOR EACH ROW EXECUTE PROCEDURE eventoCancelaAgendamentos();

----

CREATE OR REPLACE FUNCTION verificarPreAgendamento() RETURNS TRIGGER AS
$$
DECLARE
  dias INTEGER;
  aPartirDe TIMESTAMP;
BEGIN
  SELECT diasPreAgendamento
  FROM Quadra
  WHERE codq = NEW.codq
  INTO dias;
  aPartirDe := CURRENT_TIMESTAMP + (dias || ' DAY')::INTERVAL;
  IF( NEW.horarioComeco < aPartirDe) THEN
    RAISE EXCEPTION 'Tem que agendar com um maior tempo de aviso prévio';
  END IF;
  RETURN NEW;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER verificarPreAgendamento BEFORE INSERT ON Agendamento
FOR EACH ROW EXECUTE PROCEDURE verificarPreAgendamento();