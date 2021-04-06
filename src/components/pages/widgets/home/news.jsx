import React from "react";

const NewsWidget = () => {
    return (
        <React.Fragment>
            <div className="news">
                <div className="title">Latest News</div>

                <div className="news-section">
                    <div className="section">
                        <div className="section-item-big">
                            <div className="image">
                                <img
                                    src="assets/news/news00.jpg"
                                    alt="Public Beta Release"
                                />
                            </div>
                            <div className="title">
                                1.0.6 Public Beta Release!
                            </div>
                            <div className="moreinfo">
                                Download the newest client from the Downloads
                                page to start playing.
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-item-small">
                            <div className="image">
                                <img
                                    src="assets/news/news01.jpg"
                                    alt="First Community Event"
                                />
                            </div>
                            <div className="allinfo">
                                <div className="title">Community Event #1</div>
                                <div className="moreinfo">
                                    We are proud to announce our first community
                                    event
                                </div>
                            </div>
                        </div>
                        <div className="section-item-small">
                            <div className="image">
                                <img
                                    src="assets/news/news02.jpg"
                                    alt="Reverse Engineering"
                                />
                            </div>
                            <div className="allinfo">
                                <div className="title">
                                    Dev Diary &amp; reverse engineering
                                </div>
                                <div className="moreinfo">
                                    Some of the challanges we may face as a
                                    developing community
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-item-small">
                            <div className="image">
                                <img
                                    src="assets/news/news03.jpg"
                                    alt="Community Event #1"
                                />
                            </div>
                            <div className="allinfo">
                                <div className="title">Community Event #1</div>
                                <div className="moreinfo">
                                    We are proud to announce our first community
                                    event
                                </div>
                            </div>
                        </div>
                        <div className="section-item-small">
                            <div className="image">
                                <img
                                    src="assets/news/news04.jpg"
                                    alt="Dev Diary"
                                />
                            </div>
                            <div className="allinfo">
                                <div className="title">
                                    Dev Diary &amp; reverse engineering
                                </div>
                                <div className="moreinfo">
                                    Some of the challanges we may face as a
                                    developing community
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NewsWidget;
