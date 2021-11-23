import Dymo from 'dymojs'

function DymoTest() {

    const dymo = new Dymo();
    console.log(dymo)
    dymo.print('DYMO LabelWriter 450', labelXml);

    var labelXml = `
    <?xml version="1.0" encoding="utf-8"?>
    <DieCutLabel Version="8.0" Units="twips" MediaType="Default">
      <PaperOrientation>Portrait</PaperOrientation>
      <Id>Small30334</Id>
      <PaperName>30334 2-1/4 in x 1-1/4 in</PaperName>
      <DrawCommands>
        <RoundRectangle X="0" Y="0" Width="3240" Height="1800" Rx="270" Ry="270"/>
      </DrawCommands>
      <ObjectInfo>
        <TextObject>
          <Name>TEXT</Name>
          <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
          <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>
          <LinkedObjectName></LinkedObjectName>
          <Rotation>Rotation0</Rotation>
          <IsMirrored>False</IsMirrored>
          <IsVariable>False</IsVariable>
          <HorizontalAlignment>Center</HorizontalAlignment>
          <VerticalAlignment>Middle</VerticalAlignment>
          <TextFitMode>AlwaysFit</TextFitMode>
          <UseFullFontHeight>True</UseFullFontHeight>
          <Verticalized>False</Verticalized>
          <StyledText>
            <Element>
              <String>Hello World</String>
              <Attributes>
                <Font Family="Helvetica" Size="13" Bold="True" Italic="False" Underline="False" Strikeout="False"/>
                <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
              </Attributes>
            </Element>
          </StyledText>
        </TextObject>
        <Bounds X="57.6" Y="86.39999" Width="3124.8" Height="1627.2"/>
      </ObjectInfo>
    </DieCutLabel>    
`;

    return (
      <div>
          <h1>test</h1>
          <button onClick={Dymo}></button>
      </div>
    );
  }
  
  export default DymoTest;
  