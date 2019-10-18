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

    closeDrawer = () => {
        this.drawer._root.close()
    }

    openDrawer = () => {
        this.drawer._root.open()
    };
    static navigationOptions = {
        title: "Profile",
        headerLeft: <Button transparent onPress={this.openDrawer}>
            <Icon
                name="menu"
                type="Feather"
                style={styles.icon}
            />
        </Button>,

    };

    componentDidMount() {
        if (this.props.user) {

            this.props.fetchProfile();
        }
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
            return <Spinner />;
        } else {
            {
                console.log("profile.image", profile.image)
            }
            return (
                <>

                    <Drawer ref={(ref) => { this.drawer = ref; }}
                        content={<SideBar navigator={this.navigator} />}
                        onClose={() => this.closeDrawer()} >

                        <CardItem
                        >
                            <ImageBackground
                                source={profileHeader}
                                style={{ width: "100%", height: "100%" }}
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
                            <Card>






                                <CardItem >
                                    <Body>
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
                                <CardItem
                                    footer
                                    button
                                    onPress={() => alert("This is Card Footer")}
                                    style={styles.center}
                                >
                                    <Button>
                                        <Text>Edit Profile I don't work yet</Text>
                                    </Button>

                                    <Button danger onPress={this.props.logout}>
                                        <Text>Logout</Text>
                                    </Button>
                                </CardItem>


                                <CardItem
                                    style={styles.middleText}>
                                    <Button onPress={() => this.props.navigation.navigate("OrderListScreen")} >
                                        <Text>Order History</Text>
                                    </Button>
                                </CardItem>


                            </Card>
                        </Content>

                    </Drawer>


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
