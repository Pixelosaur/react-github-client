import React, { Component } from 'react';
import './Pagination.scss';

type Props = {
    currentPage: any;
    page: number;
};

export default class Pagination extends Component<Props, {}> {
    onPageChange(): void {
        this.props.currentPage(this.props.page + 1);
    }

    render() {
        return (
            <nav>
                <ul className="pagination justify-content-between">
                    <li className={`page-item ${this.props.page === 1 ? 'disabled' : null}`}>
                        <span className="page-link">
                            <i className="fas fa-long-arrow-alt-left pr-2" />
                            Previous
                        </span>
                    </li>
                    <li className="page-item">
                        <span className="page-link" onClick={this.onPageChange.bind(this)}>
                            Next
                            <i className="fas fa-long-arrow-alt-right pl-2" />
                        </span>
                    </li>
                </ul>
            </nav>
        );
    }
}
