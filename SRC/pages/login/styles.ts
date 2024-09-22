import { StyleSheet,Dimensions, BackHandler, ImageBackground, ImageBackgroundComponent} from "react-native";


export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: '#D3D3D3'

      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFC107',
        marginBottom: 20,
      },
      loginTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop:10,
        marginBottom: 30,
        
      },
      inputContainer: {
        width: '80%',
        height : 10,
        marginBottom: 1,

        

      },
      input: {
        height: 50,
        padding: 10,
        marginBottom: 1,
        borderRadius: 10 ,
        backgroundColor:"#FFC000",
        paddingLeft: 20,
        paddingTop:10,
        
      },

      inputContainer2: {
        height:60,
        justifyContent:'center',
        borderRadius: 15,
        paddingTop:20

        

      },
      input2: {
        height: 50,
        padding: 10,
        marginBottom: 1,
        borderRadius: 10 ,
        backgroundColor:"#FFC000",
        paddingLeft: 20,
        paddingTop:10,
        
      },
      button: {
        backgroundColor: '#FFC000',
        padding: 15,
        borderRadius: 5,
        width: '80%',
        marginBottom: 20,
      },
      buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
      },
      forgotPassword: {
        color: '#000',
        marginBottom: 10,
        textDecorationLine: 'underline',
      },
      registerText: {
        color: '#000',
        marginBottom: 20,
        textDecorationLine: 'underline',
      },
      socialLogin: {
        //area view//
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'center',
        width :"80%",
      
      },
      socialButton: {
        backgroundColor: '#FFC107',
        padding: 5,
        borderRadius: 5,
        width: 120,
        height:40,
        marginRight: 30,
        marginLeft : 30,
        alignItems: 'center',
      },
      socialButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        width:30,
        height:30
      },
      nextButton: {
        backgroundColor: '#FFC107',
        padding: 15,
        borderRadius: 20,
        width: 60,
        height: 60,
        alignItems: 'center',
      },
      buttonnextButtonText: {
        width: 30,
        height :30,

      },

      boxtext:{
       // backgroundColor: 'red',
        marginLeft:170, 
      },
      boxtext2:{
        //backgroundColor: 'red',
        marginLeft:240, 

      },



    });
    