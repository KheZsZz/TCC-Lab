use tcc;

INSERT INTO tcc.property_tbl(
	property_tbl.property_number,
    property_tbl.property_serial_number,
    property_tbl.name,
    property_tbl.brand,
    property_tbl.model,
    property_tbl.lot,
    property_tbl.nf,
    property_tbl.complement,
    property_tbl.value_property
) VALUES(
	0000493668, 
    'L238001200071', 
    'NOTEBOOK TELA DE 15', 
    'Itautec', 
    'W7645T5450',
    null,
    1205, 
    'TECNOLOGIA DE 2 NÚCLEOS, MEMÓRIA RAM DE 1GB, HD DE 80 GB, WINDOWS XPP, COM', 
    2522.00
);


SELECT * FROM tcc.property_tbl order by id desc limit 10 