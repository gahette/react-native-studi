import React from 'react';

import {Button, Image, ScrollView, StyleSheet, TextInput, Text} from 'react-native';

const Exemple2 = () => {
    const styleExemple = StyleSheet.create({
        img: {
            width: 50,
            height: 50,
        },
        input: {
            borderColor: "#000",
            borderWidth: 2,
            marginVertical: 10,
            padding: 5,
        },
        text: {
            margin: 10,
        },
        btn: {
            margin: 10,
        }
    })

    const hello = () => {
        alert("J'ai cliqué sur le bouton")
    }
    return (
        <ScrollView>
            <Button title="Je suis un bouton vert" onPress={hello} color="green" style={styleExemple.btn}/>
            <Image style={styleExemple.img}
                   source={{
                       uri: 'https://reactnative.dev/img/tiny_logo.png',
                   }}
            />
            <TextInput style={styleExemple.input}/>
            <Text style={styleExemple.text}>consetetur persecuti id ferri iaculis honestatis eleifend necessitatibus
                varius
                varius iusto has
                lobortis neque hendrerit dictum utroque evertitur doming ocurreret tantas ornatus placerat mei altera
                massa mazim homero facilisis necessitatibus singulis signiferumque inceptos eos graeco persequeris
                indoctum metus oporteat ultricies at vituperatoribus arcu inimicus primis praesent quaeque cubilia
                intellegebat risus legimus usu reformidans senectus vivendo euismod id constituam consectetuer vix
                imperdiet consetetur impetus mucius deserunt omittam lacinia fabellas utinam ridens mazim disputationi
                lobortis pulvinar vivendo magnis inciderint cubilia urna pri dicat moderatius simul maecenas sanctus
                reprimique rhoncus sapien dicam agam rutrum aliquid nihil posidonium sapientem no numquam facilisis
                simul commodo volumus pertinacia dictas reformidans dicta gloriatur melius reprimique conceptam
                maluisset senserit fabellas te cu consectetuer adolescens fuisset maecenas gloriatur qualisque eget
                sollicitudin blandit ornare no pretium pri tritani metus adipisci repudiandae dicta vocibus viverra
                quisque placerat duo ex vis lorem dicat nulla oratio platonem pretium maiestatis delicata venenatis
                repudiare detracto convenire sociis sit tibique contentiones deterruisset libero ut luptatum regione
                accusata purus ocurreret massa magnis antiopam definitionem mi quas oratio odio dapibus sociis
                elaboraret quaeque habitant curae putent appetere contentiones sea pretium tota mattis delenit ocurreret
                epicurei condimentum massa orci detracto feugait ultricies aptent petentium graecis facilisi fabulas
                pertinax atqui vivendo pertinacia nam eum elitr sed dissentiunt phasellus impetus dignissim nonumes
                error propriae sapien assueverit molestie lacinia dis senectus consul vituperatoribus vero veniam
                sententiae an detracto graecis rhoncus pharetra nominavi luctus eripuit natoque voluptatum quas mea
                aliquet pertinax ut dapibus habeo dui iriure per nam gubergren interesset cetero saepe tota luctus
                vehicula pro referrentur gravida erroribus faucibus repudiare vel nominavi ullamcorper mattis cum
                luptatum maiorum magna quaeque commune iisque repudiare reformidans dolores altera quam taciti altera
                error duis curabitur duis condimentum scripserit altera voluptatum instructior pretium dico eos dictumst
                pretium vestibulum sanctus conubia donec sit wisi habitasse curae meliore definitionem dictumst commune
                platea ubique labores iisque aeque percipit nonumy aliquet mucius elitr audire pellentesque velit cetero
                aliquip affert omnesque duis dicam platonem fames repudiare disputationi utroque gloriatur commodo
                sadipscing adhuc iuvaret partiendo movet fermentum mucius sociosqu liber te ignota ornare bibendum sale
                ludus iudicabit tractatos gubergren deterruisset deserunt ut latine accumsan dicta affert curabitur
                interdum ubique decore percipit mentitum natum vix mattis docendi at mel vero simul vehicula velit
                egestas veniam eripuit iisque egestas rutrum tantas tation mauris justo aliquid novum explicari proin
                eam comprehensam dictumst aliquid neque varius vis viderer dignissim petentium ipsum liber vidisse
                iudicabit vis nisi mattis
            </Text>
        </ScrollView>
    )
        ;
};

export default Exemple2;
