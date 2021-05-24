import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import db from '../COnfig';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allAttendance: [],
      students: {
        Abhinav: '',
        Aditya: '',
        Daksh: '',
        Dhruv: '',
        Durvish: '',
        Kartikey: '',
        Lakshay: '',
        Mayank: '',
        Neeraj: '',
        Nishant: '',
        Prashant: '',
        Rohit: '',
        Swaym: '',
        Yashvin: '',
      },
    };
  }

  submitAttendance = () => {
    this.props.navigation.navigate('SummaryScreen');

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();

    db.ref('/').update({
      [year]: {
        [month]: {
          [date]: {
            Abhinav: { Attendance: this.state.students.Abhinav, Roll_No: 1 },
            Aditya: { Attendance: this.state.students.Aditya, Roll_No: 2 },
            Daksh: { Attendance: this.state.students.Daksh, Roll_No: 3 },
            Dhruv: { Attendance: this.state.students.Dhruv, Roll_No: 4 },
            Durvish: { Attendance: this.state.students.Durvish, Roll_No: 5 },
            Kartikey: { Attendance: this.state.students.Kartikey, Roll_No: 6 },
            Lakshay: { Attendance: this.state.students.Lakshay, Roll_No: 7 },
            Mayank: { Attendance: this.state.students.Mayank, Roll_No: 8 },
            Neeraj: { Attendance: this.state.students.Neeraj, Roll_No: 9 },
            Nishant: { Attendance: this.state.students.Nishant, Roll_No: 10 },
            Prashant: { Attendance: this.state.students.Prashant, Roll_No: 11 },
            Rohit: { Attendance: this.state.students.Rohit, Roll_No: 12 },
            Swaym: { Attendance: this.state.students.Swaym, Roll_No: 13 },
            Yashvin: { Attendance: this.state.students.Yashvin, Roll_No: 14 },
          },
        },
      },
    });
  };

  render() {
    return (
    
      <View style={styles.container}>
           <AppHeader></AppHeader>
        <Text style={styles.text2}>1. Abhinav</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Abhinav: 'Present' });
            this.state.students.Abhinav = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Abhinav: 'Absent' });
            this.state.students.Abhinav = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>2. Aditya</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Aditya: 'Present' });
            this.state.students.Aditya = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Aditya: 'Absent' });
            this.state.students.Aditya = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>3. Daksh</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Daksh: 'Present' });
            this.state.students.Daksh = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Daksh: 'Absent' });
            this.state.students.Daksh = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>4. Dhruv</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Dhruv: 'Present' });
            this.state.students.Dhruv = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Dhruv: 'Absent' });
            this.state.students.Dhruv = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>5. Durvish</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Durvish: 'Present' });
            this.state.students.Durvish = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Durvish: 'Absent' });
            this.state.students.Durvish = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>6. Kartikey</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Kartikey: 'Present' });
            this.state.students.Kartikey = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Kartikey: 'Absent' });
            this.state.students.Kartikey = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>7. Lakshay</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Lakshay: 'Present' });
            this.state.students.Lakshay = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Lakshay: 'Absent' });
            this.state.students.Lakshay = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>8. Mayank</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Mayank: 'Present' });
            this.state.students.Mayank = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Mayank: 'Absent' });
            this.state.students.Mayank = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>9. Neeraj</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Neeraj: 'Present' });
            this.state.students.Neeraj = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Neeraj: 'Absent' });
            this.state.students.Neeraj = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>10. Nishant</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Nishant: 'Present' });
            this.state.students.Nishant = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Nishant: 'Absent' });
            this.state.students.Nishant = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>11. Prashant</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Prashant: 'Present' });
            this.state.students.Prashant = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Prashant: 'Absent' });
            this.state.students.Prashant = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>12. Rohit</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Rohit: 'Present' });
            this.state.students.Rohit = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Rohit: 'Absent' });
            this.state.students.Rohit = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>13. Swaym</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Swaym: 'Present' });
            this.state.students.Swaym = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Swaym: 'Absent' });
            this.state.students.Swaym = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>14. Yashvin</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Yashvin: 'Present' });
            this.state.students.Yashvin = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Yashvin: 'Absent' });
            this.state.students.Yashvin = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submit} onPress={this.submitAttendance}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  presentContainer: {
    borderWidth: 2,
    padding: 2,
    width: 80,
    height:30,
    borderRadius: 15,
    textAlign: 'center',
    marginLeft: 125,
    marginTop: -30,
    backgroundColor: 'lightblue',
  },

  absentContainer: {
    borderWidth: 2,
    padding: 2,
    width: 80,
    height:30,
    borderRadius: 20,
    textAlign: 'center',
    marginLeft: 225,
    marginTop: -35,
    backgroundColor: 'orange',
  },

  text: {
    fontSize: 15,
    justifyContent:'center',
    textAlign:'center',
    alignSelf:'center'
    
  },

  text2: {
    fontSize: 20,
     fontWeight: 'bold',
      color: 'brown',
      backgroundColor:'#F0F0F0',
    marginTop: 30,
  },

  submit: {
    backgroundColor: 'green',
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'green',
    padding: 2,
    
  },
  container: {
    alignSelf: 'center',
    marginTop: 10,
    border: 20,
    borderRadius: 19,
    backgroundColor: 'brown',
  },
});
