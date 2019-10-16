import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/authActions";
import { withNavigation } from "react-navigation";

// NativeBase Components
import {
    Text, Body, CardItem, Content, Card, Spinner, Button
} from "native-base";
import { ImageBackground, View } from "react-native";

//Components
import wallpaper from "../../assets/wall.png";

// Style
import styles from "./styles";

class Profile extends Component {
    static navigationOptions = {
        title: "Your Profile",
    };

    componentDidMount() {
        this.props.fetchProfile();
    }

    render() {
        const profile = this.props.profile;
        const user = this.props.user;
        const loading = this.props.profileLoading

        if (user) {
            if (loading) {
                return <Spinner />;
            } else {

                return (
                    <>

                        <Content padder style={{ marginTop: 10 }}>
                            <Card>
                                <CardItem
                                    style={styles.middleText}
                                    button
                                    onPress={() => alert("This is Card Header")}
                                >
                                    <Text style={styles.middleText}> {profile.user.username}'s Profile</Text>
                                </CardItem>
                                <CardItem button onPress={() => alert("This is Card Body")}>
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
                                </CardItem>
                            </Card>
                        </Content>



                    </>

                )
            }
            // if user is undefind
            // redirect to Login page
            return (
                <>
                    <Text>The endless cursed hell of the evil demon profile...  </Text>

                    <Text style={styles.middleText}> {profile.user.username}'s Profile</Text>
                </>

            )
            // return (this.props.navigation.replace("OrderDetails"))

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

    };
};

export default withNavigation((connect(mapStateToProps, mapDispatchToProps)(Profile)));
