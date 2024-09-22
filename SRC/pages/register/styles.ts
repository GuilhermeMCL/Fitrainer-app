import { StyleSheet,Dimensions, BackHandler, ImageBackground, ImageBackgroundComponent} from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFCC00', // Cor de fundo amarela
      },
      header: {
        backgroundColor: '#FFCC00',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 20,
      },
      circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      },
      icon: {
        marginBottom: 5,
      },
      kcalText: {
        fontWeight: 'bold',
      },
      headerText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      content: {
        flex: 1,
        backgroundColor: '#FFE466', // Cor de fundo amarela clara
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
      },
      navigationBar: {
        flexDirection: 'row',
        backgroundColor: '#FFCC00',
        justifyContent: 'space-around',
        padding: 10,
      },
      navItem: {
        alignItems: 'center',
      },
    });