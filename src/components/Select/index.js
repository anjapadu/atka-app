import React, { PureComponent } from 'react';
import {
    View,
    DatePickerAndroid,
    Platform,
    DatePickerIOS
} from 'react-native';
import Input from '../Input';
import SelectModal from '../SelectModal';
import Modal from '../Modal';
import moment from 'moment';

class Select extends PureComponent {
    constructor(props) {
        super(props);
        let text = null;
        let key = this.props.value || null;

        if (this.props.value && !this.props.isDate) {
            let tmp = this.props.options.find(i => i.key == this.props.value)
            if (tmp) {
                text = tmp["text"];
            } else {
                key = null;
            }
        }
        this.state = {
            showModal: false,
            showDatePicker: false,
            key,
            text,
            chosenDate: this.props.isDate ? ((!this.props.value || this.props.value == '') ? new Date(2000, 1, 1) : new Date(
                parseInt(this.props.value.split('/')[2]),
                parseInt(this.props.value.split('/')[1]),
                parseInt(this.props.value.split('/')[0])
            )) : null
        }
    }
    async _onShow() {
        if (this.props.isDate) {
            if (Platform.OS == 'android') {

                try {
                    const { action, year, month, day } = await DatePickerAndroid.open({
                        // Use `new Date()` for current date.
                        // May 25 2020. Month 0 is January.
                        date: new Date(1990, 1, 1)
                    });
                    if (action !== DatePickerAndroid.dismissedAction) {
                        // Selected year, month (0-11), day
                        this.props.onSelect(`${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}`)
                    }
                } catch ({ code, messae }) {
                    console.warn('Cannot open date picker', message);
                }
                return;
            } else {
                this.setState({
                    showDatePicker: true
                })
            }

        }

        this.setState({
            showModal: true,
        })

    }
    _onSelect({ key, text }) {
        this.setState({
            showModal: false,
            key,
            text
        }, () => {
            this.props.onSelect({ key, text })
        })
    }
    _setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }
    render() {
        return <View
            style={{
                alignSelf: 'stretch',
            }}
        >
            <Input
                onPress={this._onShow.bind(this)}
                clickeable
                {...this.props}
                value={this.props.isDate ? this.props.value : this.state.text}
            />
            {(this.props.isDate && Platform.OS == 'ios' && this.state.showDatePicker) && <Modal
                onRequestClose={_ => this.setState({
                    showDatePicker: false
                })}
                onConfirm={_ => this.setState({
                    showDatePicker: false
                }, _ => {
                    this.props.onSelect(moment(this.state.chosenDate, 'YYYY-MM-DD').format('DD/MM/YYYY'));
                })}
            >
                <DatePickerIOS
                    locale={"Es"}
                    mode={"date"}
                    date={this.state.chosenDate}
                    onDateChange={this._setDate.bind(this)}
                />
            </Modal>}
            {this.state.showModal && <SelectModal
                onlyImage={this.props.onlyImage}
                onSelect={this._onSelect.bind(this)}
                options={this.props.options || []}
                onRequestClose={_ => this.setState({
                    showModal: false
                })}
            />}
        </View>
    }
}

export default Select;