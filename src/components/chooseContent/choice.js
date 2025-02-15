import React, { Component } from 'react';
import './choice.css'

class ChoiceGrid extends Component {

    render() {
        return (
            <div>
                <div class="main">
                    <h1>Choose the book you like :</h1>
                    <ul class="cards" >
                        <li class="cards_item">
                            <div class="card">
                                <div class="card_image"><img src="https://book-ye.com.ua/upload/iblock/7ca/637075f7_77d8_11ea_812d_000c29ae1566_87bc33d1_77d9_11ea_812d_000c29ae1566.jpg" alt="b1" /></div>
                                <div class="card_content">
                                    <h2 class="card_title">Острови поміж течій</h2>
                                    <p class="card_text">*Тут буде опис*</p>
                                    <button class="butn card_btn">Select</button>
                                </div>
                            </div>
                        </li>

                        <li class="cards_item">
                            <div class="card">
                                <div class="card_image"><img src="https://book-ye.com.ua/upload/iblock/2d2/98d6f96b_905b_11ea_8136_000c29ae1566_142b2d81_9061_11ea_8136_000c29ae1566.jpg" alt="b2" /></div>
                                <div class="card_content">
                                    <h2 class="card_title">Моцарт 2.0</h2>
                                    <p class="card_text">*Тут буде опис*</p>
                                    <button class="butn card_btn">Select</button>
                                </div>
                            </div>
                        </li>

                        <li class="cards_item">
                            <div class="card">
                                <div class="card_image"><img src="https://book-ye.com.ua/upload/iblock/cf9/bed3f1b1_6ddd_11ea_812b_000c29ae1566_ac3f45bc_6de1_11ea_812b_000c29ae1566.jpg" alt="b3" /></div>
                                <div class="card_content">
                                    <h2 class="card_title">Амадока</h2>
                                    <p class="card_text">*Тут буде опис*</p>
                                    <button class="butn card_btn">Select</button>
                                </div>
                            </div>
                        </li>

                        <li class="cards_item">
                            <div class="card">
                                <div class="card_image"><img src="https://book-ye.com.ua/upload/iblock/b02/cfa051db_74e0_11e6_80be_000c29ae1566_91eb1861_8a10_11ea_8131_000c29ae1566.jpg" alt="b4" /></div>
                                <div class="card_content">
                                    <h2 class="card_title">1984</h2>
                                    <p class="card_text">*Тут буде опис*</p>
                                    <button class="butn card_btn">Select</button>
                                </div>
                            </div>
                        </li>

                        <li class="cards_item">
                            <div class="card">
                                <div class="card_image"><img src="https://book-ye.com.ua/upload/iblock/299/9de45518_9059_11ea_8136_000c29ae1566_ea6715ab_905a_11ea_8136_000c29ae1566.jpg" alt="b5" /></div>
                                <div class="card_content">
                                    <h2 class="card_title">Бріджит Джонс. На межі здорового глузду</h2>
                                    <p class="card_text">*Тут буде опис*</p>
                                    <button class="butn card_btn">Select</button>
                                </div>
                            </div>
                        </li>

                        <li class="cards_item">
                            <div class="card">
                                <div class="card_image"><img src="https://book-ye.com.ua/upload/iblock/01f/ae2b88f8_8a24_11ea_8131_000c29ae1566_f06503f9_8a27_11ea_8131_000c29ae1566.jpg" alt="b6" /></div>
                                <div class="card_content">
                                    <h2 class="card_title">Список кораблів</h2>
                                    <p class="card_text">*Тут буде опис*</p>
                                    <button class="butn card_btn">Select</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="pagination-wrapper">
                    <div class="pagination">
                        <a class="prev page-numbers" href="">prev</a>
                        <a class="page-numbers" href="">1</a>
                        <a class="page-numbers" href="">2</a>
                        <a class="page-numbers" href="">3</a>
                        <a class="page-numbers" href="">4</a>
                        <a class="page-numbers" href="">5</a>
                        <a class="page-numbers" href="">6</a>
                        <a class="page-numbers" href="">7</a>
                        <a class="page-numbers" href=";">8</a>
                        <a class="page-numbers" href="">9</a>
                        <a class="next page-numbers" href="">next</a>
                    </div>
                </div>
            </div >
        );
    }
}

export default ChoiceGrid