import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      },
      bannerText: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#fff',
      },
      linky: {
        color: 'blue',
        paddingTop: 10
      },
      MainContainer: {
        // Setting up View inside content in Vertically center.
        justifyContent: "center",
        flex: 1,
        margin: 0
      },
    
      rowViewContainer: {
        fontSize: 20,
        paddingRight: 0,
        paddingTop: 10,
        paddingBottom: 10
      }
});