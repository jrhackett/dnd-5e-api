DROP TABLE IF EXISTS spells;

CREATE TABLE spells (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    school VARCHAR NOT NULL,
    level INTEGER NOT NULL,
    ritual BOOLEAN,
    casting_time VARCHAR NOT NULL,
    source VARCHAR NOT NULL,
    range VARCHAR NOT NULL,
    classes VARCHAR ARRAY,
    components VARCHAR,
    duration VARCHAR NOT NULL,
    at_higher_level VARCHAR NOT NULL,
    concentration BOOLEAN,
    slug VARCHAR NOT NULL,
    page INTEGER NOT NULL,
    description VARCHAR NOT NULL
);

INSERT INTO spells (name, school, level, ritual, casting_time, source, range, classes, components, duration, at_higher_level, concentration, slug, page, description) 
    VALUES ('True Strike', 'Divination', 0, false, '1 Action', 'Player\u2019s Handbook', '30 feet', '{"Bard", "Sorcerer", "Warlock", "Wizard"}', 'S', 'Concentration, up to 1 round', 'Nothing specified', true, 'true-strike', 284, 'You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target\u2019s defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn\u2019t ended.');
