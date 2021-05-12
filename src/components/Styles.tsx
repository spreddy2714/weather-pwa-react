import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    weatherInput : {
        display: 'flex',
        flexWrap : 'wrap',
        justifyContent : 'center',
        marginTop : '30%',
        borderRadius : 3
    },

    paper : {
        display : 'flex',
        alignItems : 'center',
        padding : '50 50',
        alignSelf : 'center'
    }

}));