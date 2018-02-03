import React, { Component } from 'react';

export default class Main extends Component{
    render(){
        return(
            <div className="main ">
                <h1>!TEST!</h1>
                <h1 className="red ">Ремонт ноутбуков</h1>
                <h2 className="green ">Чайный сервис</h2>
                <article>
                    <h3>Ремонт ноутбуков любой сложности!</h3>
                    <h3>5 причин почему стоит обращаться напрямую к опытным инженерам, а не в сервисный центр:</h3>
                    1: Дешевле
                    2: Больше внимания к тхнике
                    3: Нет накрутки на комплектующих
                    4: Скорость работы
                    5: Гарантия
                </article>
            </div>
        )
    }
}