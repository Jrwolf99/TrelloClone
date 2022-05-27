import React, { useState } from 'react'
import styled from "styled-components";



const StyledProjectInfo = styled.div`
    color: white;
    display: flex;
    justify-content: left;
    align-items: center;
    &>h2 {
        font-size: 1rem;
        margin: .5rem 2rem;
    }
`;


const StyledHome = styled.div`
    display: flex;
    align-items: flex-start;
    overflow: auto;
    padding-right: 2em;
`;



const StyledTrelloColumn = styled.div`
    background-color: #ebecf0;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-bottom: 1rem;
    &>h2 {
        margin: 0.5rem;
        font-size: 1rem;
    }
`;


const StyledTrelloCard = styled.div`
    width: 250px;
    font-size: .6rem;
    background-color: white;
    margin: .5rem;
    padding: 1em;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

export default function Home() {
    return (
        <>
            <StyledProjectInfo><h2>Project Title</h2></StyledProjectInfo>
            <StyledHome>
                <StyledTrelloColumn>
                    <h2>Title</h2>
                    <StyledTrelloCard>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ullam. Fugiat distinctio ducimus aliquam, alias repellendus velit dolor, pariatur doloribus voluptatum, repudiandae suscipit optio. Incidunt eos ratione blanditiis repudiandae fugiat?
                    </StyledTrelloCard>       <StyledTrelloCard>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ullam. Fugiat distinctio ducimus aliquam, alias repellendus velit dolor, pariatur doloribus voluptatum, repudiandae suscipit optio. Incidunt eos ratione blanditiis repudiandae fugiat?
                    </StyledTrelloCard>       <StyledTrelloCard>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ullam. Fugiat distinctio ducimus aliquam, alias repellendus velit dolor, pariatur doloribus voluptatum, repudiandae suscipit optio. Incidunt eos ratione blanditiis repudiandae fugiat?
                    </StyledTrelloCard>
                </StyledTrelloColumn>
                <StyledTrelloColumn>
                    <h2>Title</h2>
                    <StyledTrelloCard>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ullam. Fugiat distinctio ducimus aliquam, alias repellendus velit dolor, pariatur doloribus voluptatum, repudiandae suscipit optio. Incidunt eos ratione blanditiis repudiandae fugiat?
                    </StyledTrelloCard>       <StyledTrelloCard>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ullam. Fugiat distinctio ducimus aliquam, alias repellendus velit dolor, pariatur doloribus voluptatum, repudiandae suscipit optio. Incidunt eos ratione blanditiis repudiandae fugiat?
                    </StyledTrelloCard>
                </StyledTrelloColumn>
                <StyledTrelloColumn>
                    <h2>Title</h2>
                    <StyledTrelloCard>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ullam. Fugiat distinctio ducimus aliquam, alias repellendus velit dolor, pariatur doloribus voluptatum, repudiandae suscipit optio. Incidunt eos ratione blanditiis repudiandae fugiat?
                    </StyledTrelloCard>       <StyledTrelloCard>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ullam. Fugiat distinctio ducimus aliquam, alias repellendus velit dolor, pariatur doloribus voluptatum, repudiandae suscipit optio. Incidunt eos ratione blanditiis repudiandae fugiat?
                    </StyledTrelloCard>
                </StyledTrelloColumn>
            </StyledHome>
        </>
    )
}