import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header } from '../Components';

class Page extends React.Component {
    state = {
        titleList: [],
        depth: 0
    }

    componentDidMount() {
        let temp = this.state.titleList;
        temp.push(this.props.title);
        this.setState({
            titleList: temp,
            depth: 0
        })
    }


    // updateTitle = (flag, newTitle = '', lengthLimit = 0) => {
    //     let { titleList, depth } = this.state;
    //     if (flag === 'push') {
    //         if (lengthLimit > 1 && titleList.length === lengthLimit) {
    //             titleList[depth] = newTitle;
    //         } else {
    //             depth++;
    //             titleList.push(newTitle);
    //         }
    //     } else {
    //         depth--;
    //         titleList.pop()
    //     }
    //     this.setState({
    //         titleList: titleList,
    //         depth: depth
    //     })
    // }

    // formatTitle = () => {
    //     let temp = [];
    //     temp.push(this.props.title);
    //     this.setState({
    //         titleList: temp,
    //         depth: 0
    //     })
    // }

    render() {
        const { titleList, depth } = this.state;
        const { page } = this.props;
        return (
            <React.Fragment>
                <Header titleArray={titleList} depth={depth} updateTitle={(f, t) => this.updateTitle(f,t)}></Header>
                <div className="content">
                    {page({updateTitle: (f, n, t) => this.updateTitle(f, n, t), depth: depth, formatTitle: () => this.formatTitle()})}
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps, { })(withRouter(Page));
