import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/authActions";
import { withNavigation } from "react-navigation";

// NativeBase Components
import {
    Text, Body, CardItem, Content, Card, Spinner, Button, Thumbnail, Drawer, Icon
} from "native-base";
import { ImageBackground, View, Image } from "react-native";

//Components
import wallpaper from "../../assets/wall.png";
import SideMenuButton from "../SideMenuButton"; //temp for testing
import SideBar from '../../Navigation/SideBar';
import profileHeader from "../../assets/profileHeader3.jpg"

// Style
import styles from "./styles";

class Profile extends Component {
    state = {
        drawerIsOpen: false,
    }



    handleDrawer = async () => {
        if (this.state.drawerIsOpen) {
            this.drawer._root.close()
        } else {
            this.drawer._root.open()
        }
        await this.setState({ drawerIsOpen: !this.state.drawerIsOpen })
        this.props.navigation.setParams({ "isOpen": this.state.drawerIsOpen })
    }
    static navigationOptions = ({ navigation }) => {
        return {

            title: "Profile",

            headerLeft: <Button
                style={styles.menu}
                transparent onPress={() => navigation.getParam("handleDrawer")()}>
                {navigation.getParam("isOpen") ? <Icon
                    name="close"
                    type="AntDesign"
                    style={styles.icon, styles.menu}
                /> : <Icon
                        name="menu"
                        type="Feather"
                        style={styles.icon, styles.menu}
                    />}

            </Button>,


            headerStyle: {
                backgroundColor: "#3dffcb",
                fontWeight: 'bold',
            }
        }

    };

    componentDidMount() {
        if (this.props.user) {

            this.props.fetchProfile();
        }
        this.props.navigation.setParams({ handleDrawer: this.handleDrawer, isOpen: this.state.drawerIsOpen })

    }


    componentDidUpdate(prevProps) {

        if (prevProps.user !== this.props.user)
            this.props.fetchProfile();

    }

    genderString = (gender) => {
        if (gender === "F")
            return "Female"
        if (gender === "M")
            return "Male"
        return ""
    }

    render() {
        const profile = this.props.profile;
        const user = this.props.user;
        const loading = this.props.profileLoading

        if (!user) {
            // if user is undefind
            // redirect to Login page
            return (

                // (this.props.navigation.replace("LoginScreen")

                // )
                <>
                    <Text>The endless cursed hell of the evil demon profile...  </Text>

                    <Button btn btn-danger onPress={this.props.navigation.replace("LoginScreen")}>
                        <Text>Login</Text>
                    </Button>

                </>
            )
        }
        // else if user is defined 
        if (loading) {

            return (
                <ImageBackground
                    source={wallpaper}
                    style={{ width: "100%", height: "100%" }}
                >
                    <Spinner />

                </ImageBackground>

            )
        } else {
            {
                console.log("profile.image", profile.image)
            }
            return (
                <>
                    <ImageBackground
                        source={wallpaper}
                        style={{ width: "100%", height: "100%" }}
                    >
                        <Drawer ref={(ref) => { this.drawer = ref; }}
                            content={<SideBar navigator={this.navigator} />}
                            onClose={() => this.closeDrawer()}
                            panOpenMask={0.5}
                            openDrawerOffset={0.5}
                            onClose={this.closeDrawer}
                            onOpen={this.openDrawer}
                            captureGestures="open"

                        >

                            <CardItem
                                style={{ backgroundColor: "transparent" }}

                            >
                                <ImageBackground
                                    source={profileHeader}
                                    style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
                                >

                                    <View style={styles.center}>
                                        <Image
                                            style={styles.image}
                                            bordered
                                            source={{ uri: `http://chabra.herokuapp.com${profile.image}` }}
                                        >
                                        </Image>

                                    </View>

                                </ImageBackground>

                            </CardItem>

                            <Content >
                                <Card style={{ backgroundColor: "transparent" }}>






                                    <CardItem style={{ backgroundColor: "transparent" }}
                                    >
                                        <Body >
                                            <Text style={styles.titleOfDetail}>Username:  <Text> {profile.user.username}</Text>
                                            </Text>
                                            <View style={styles.hairLine} />

                                            <Text style={styles.titleOfDetail}>First Name: <Text> {profile.user.first_name}</Text>

                                            </Text>
                                            <View style={styles.hairLine} />

                                            <Text style={styles.titleOfDetail}>Last Name: <Text> {profile.user.last_name}</Text>

                                            </Text>
                                            <View style={styles.hairLine} />

                                            <Text style={styles.titleOfDetail}>Age: {profile.age}</Text>
                                            <View style={styles.hairLine} />


                                            <Text style={styles.titleOfDetail}>Email: {profile.user.email}</Text>
                                            <View style={styles.hairLine} />



                                            <Text style={styles.titleOfDetail}>Phone Number: {profile.phone}</Text>
                                            <View style={styles.hairLine} />

                                            <Text style={styles.titleOfDetail}>Gender: {this.genderString(profile.gender)}</Text>
                                            <View style={styles.hairLine} />

                                        </Body>
                                    </CardItem>


                                </Card>

                            </Content>

                        </Drawer>
                    </ImageBackground>


                </>

            )
        }



    }
}

const mapStateToProps = state => ({
    user: state.authReducer.user,
    profile: state.authReducer.profile,
    profileLoading: state.authReducer.profileLoading,
});

const mapDispatchToProps = dispatch => {
    return {
        fetchProfile: () => dispatch(actionCreators.fetchProfile()),
        logout: () => dispatch(actionCreators.logout()),

    };
};

export default withNavigation((connect(mapStateToProps, mapDispatchToProps)(Profile)));
