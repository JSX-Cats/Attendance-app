import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  br,
  tbody
} from 'react-native';
import db from '../COnfig';
import AppHeader from '../components/AppHeader';

export default class SummaryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      present: 0,
      absent: 0,
    };

    this.absents = [];
    this.absent_Father = [];
    this.absent_Mobile = [];
  }

  gettingAttendance = () => {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();

    var team = db
      .ref(year + '/' + month + '/' + date + '/')
      .on('value', (data) => {
        var studentList = data.val();
        for (var student in studentList) {
          if (studentList[student]['Attendance'] === 'Present') {
            this.setState({ present: this.state.present + 1 });
          }

          if (studentList[student]['Attendance'] === 'Absent') {
            this.setState({ absent: this.state.absent + 1 });
            studentList[student]['Roll_No'] = student;
            this.setState({ name1: student });
            this.absents.push(this.state.name1);

            db.ref('Student_List/' + student).on('value', (data) => {
              var info = data.val();
              this.setState({ father: info.Father_Name });
              this.setState({ mobile: info.Number });
              this.absent_Father.push(this.state.father);
              this.absent_Mobile.push(this.state.mobile);
              console.log(this.absents,this.absent_Father,this.absent_Mobile);
            });
          }
        }
      });
  };

  render() {
    return (
      <View>
       
          <AppHeader />
          {this.state.present === 0 ? (
            <TouchableOpacity
              style={styles.container}
              onPress={this.gettingAttendance}>
              <Text style={styles.text}>Get Attendance</Text>
            </TouchableOpacity>
          ) : null}

          {this.state.present != 0 ? (
            <Text style={styles.text2}>
              Number of Students Present: {this.state.present}
            </Text>
          ) : null}

          {this.state.absent != 0 ? (
            <Text style={styles.text3}>
              Number of Students Absent: {this.state.absent}
            </Text>
          ) : null}

          {this.state.absent != 0 ? (
            <Text style={styles.bold}>Absentees</Text>
          ) : null}

          {this.absents.length >= 1 ? (
            <Text style={styles.text4}>
              Name: {this.absents[0]}
              <br />
              Father Name: {this.absent_Father[0]}
              <br />
              Mobile Number: {this.absent_Mobile[0]}
            </Text>
          ) : null}

          {this.absents.length >= 2 ? (
            <Text style={styles.text4}>
              Name: {this.absents[1]}
              <br />
              Father Name: {this.absent_Father[1]}
              <br />
              Mobile Number: {this.absent_Mobile[1]}
            </Text>
          ) : null}

          {this.absents.length >= 3 ? (
            <Text style={styles.text4}>
              Name: {this.absents[2]}
              <br />
              Father Name: {this.absent_Father[2]}
              <br />
              Mobile Number: {this.absent_Mobile[2]}
            </Text>
          ) : null}

          {this.absents.length >= 4 ? (
            <Text style={styles.text4}>
              Name: {this.absents[3]}
              <br />
              Father Name: {this.absent_Father[3]}
              <br />
              Mobile Number: {this.absent_Mobile[3]}
            </Text>
          ) : null}

          {this.absent_Father.length >= 5 ? (
            <Text style={styles.text4}>
              Name: {this.absents[4]}
              <br />
              Father Name: {this.absent_Father[4]}
              <br />
              Mobile Number: {this.absent_Mobile[4]}
            </Text>
          ) : null}

          {this.absents.length >= 6 ? (
            <Text style={styles.text4}>
              Name: {this.absents[5]}
              <br />
              Father Name: {this.absent_Father[5]}
              <br />
              Mobile Number: {this.absent_Mobile[5]}
            </Text>
          ) : null}

          {this.absents.length >= 7 ? (
            <Text style={styles.text4}>
              Name: {this.absents[6]}
              <br />
              Father Name: {this.absent_Father[6]}
              <br />
              Mobile Number: {this.absent_Mobile[6]}
            </Text>
          ) : null}

          {this.absents.length >= 8 ? (
            <Text style={styles.text4}>
              Name: {this.absents[7]}
              <br />
              Father Name: {this.absent_Father[7]}
              <br />
              Mobile Number: {this.absent_Mobile[7]}
            </Text>
          ) : null}

          {this.absents.length >= 9 ? (
            <Text style={styles.text4}>
              Name: {this.absents[8]}
              <br />
              Father Name: {this.absent_Father[8]}
              <br />
              Mobile Number: {this.absent_Mobile[8]}
            </Text>
          ) : null}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    padding: 3,
    backgroundColor: 'blue',
    borderRadius: 5,
    borderWidth: 2,
    margin: 20,
  },

  text: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'yellow',
  },

  text2: {
    fontSize: 20,
    backgroundColor: 'green',
    color: 'yellow',
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 2,
    padding: 3,
  },

  text3: {
    fontSize: 20,
    backgroundColor: 'red',
    color: 'yellow',
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 2,
    padding: 3,
  },

  text4: {
    fontSize: 15,
    backgroundColor: 'black',
    color: 'white',
    padding: 2,
    borderWidth: 3,
    borderRadius: 5,
    margin: 10,
  },

  bold: {
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: 'white',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
