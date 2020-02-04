import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';


const customers =  [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '나동빈',
    'birthday': '960508',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이순신',
    'birthday': '961127',
    'gender': '남자',
    'job': '디자이너'
  }
]

class App extends Component {
  render(){
    return(
      <div>
        {customers.map(x=>{
          return <Customer key={x.id} id={x.id} image={x.image} name={x.name} birthday={x.birthday} gender={x.gender} job={x.job} />
        })}
      </div>
    );
  }
}

export default App;
