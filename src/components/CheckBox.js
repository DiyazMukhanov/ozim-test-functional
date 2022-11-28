import React, {useEffect, useState} from 'react';
import { uniqueId } from 'lodash';

const CheckBox = (props) => {
    const [id, setId] = useState(uniqueId('Checkbox'));
    const [isChecked, setIsChecked] = useState(props.initialChecked);

    const onChange = (event) => {
        let checkboxIsChecked = event.currentTarget.checked;
        setIsChecked(checkboxIsChecked);
    }

    useEffect(() => {
        if(isChecked !== props.initialChecked && typeof props.onChange === 'function') {
            props.onChange(isChecked);
        }
    }, [isChecked]);


        return (
            <div>
                <label htmlFor={id}>
                    {props.label}
                </label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    id={id}
                    onChange={onChange}
                />
            </div>
        );

}

export default CheckBox;

// class CheckBox extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: uniqueId('Checkbox'),
//             isChecked: this.props.initialChecked
//         };
//     }
//
//     onChange = (event) => {
//         let isChecked = event.currentTarget.checked;
//         this.setState({ isChecked });
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         if (
//             prevState.isChecked !== this.state.isChecked &&
//             typeof this.props.onChange === 'function'
//         ) {
//             this.props.onChange(this.state.isChecked);
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <label htmlFor={this.state.id}>
//                     {this.props.label}
//                 </label>
//                 <input
//                     type="checkbox"
//                     checked={this.state.isChecked}
//                     id={this.state.id}
//                     onChange={this.onChange}
//                 />
//             </div>
//         );
//     }
// }
// export default CheckBox;

