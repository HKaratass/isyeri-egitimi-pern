import styled from "styled-components";
import { devices } from "../../../../style/devices";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.event_area_wrapper};
    width: ${props => props.$ALL ? "calc(65% - 10px)" : "100%"};
    height: ${props => props.$ALL ? "100%" : "100%"}; //-4 silindi
    margin:  ${props => props.$ALL ? "0 5px 0 5px" : "0"};
    border-radius: 5px;
    position: relative;
    overflow: hidden;

    @media ${devices.mainbrk} {
        width: ${props => props.$ALL && "60%"};
        ${props => !props.$ALL && "margin: 0;"};
    }

    @media ${devices.scdbrk} {
        width: ${props => props.$ALL && "50%"};
    }

    @media ${devices.my} {
        width: 100%;
        margin: ${props => props.$ALL ? "4px 0 0 0" : "0"};
        height: ${props => props.$ALL ? "calc(50% - 4px)" : "100%"}; //-4 silindi
    }
    
`;

export const TagLabel = styled.h3`
    padding: 0 0 0 5px;
    margin: 0;
    color: ${({ theme }) => theme.event_area_head_tag_label};;
    height: 25px;
    user-select: none;

`;

export const ScrollArea = styled.div`
    overflow-y:  auto;
    height: calc(100% - 25px - 5px - 1.3em - 10px);
    @media ${devices.my} {
        width: 100%;
        height: ${props => props.$ALL ? "calc(100% - 25px - 5px - 1.3em - 10px)" : "calc(100% - 25px - 5px - 1.3em - 10px - 20px)"}; //-4 silindi
    }
`;

export const HeaderContainer = styled.div`
    padding: 5px;
    width: calc(100% - 10px);
    display: flex;
    height: 1.4em;
    user-select: none;

    @media ${devices.my} {
        margin-top: ${props => props.$ALL ? "0" : "20px"};
        
    }
`;

export const TableHead = styled.div`
    margin: 0 3px;
    padding-left: 5px;
    background-color: ${({ theme }) => theme.event_area_table_header_bc};
    border-radius: 3px;
    font-weight: 500;
    width: calc(37.5% - 14px);
    //10/3
`;

export const TableHeadDate = styled(TableHead)`
    width: calc(15% - 3px);
`;

export const ShowAll = styled.a`
    position: absolute;
    right: 3px;
    top: 3px;
    color: ${({ theme }) => theme.show_all_label};
    text-decoration: underline;
    user-select: none;
    cursor: pointer;
`;

export const SelectYear = styled.select`
    position: absolute;
    outline: 0;
    top: 8px;
    left: 20ch;
    text-align: center;
    width: 120px;
    height: 1.4em;

    @media ${devices.my} {
        left: 15px;
        top: 25px;
        
    }

`;

export const SelectIssue = styled(SelectYear)`
    left: calc(20ch + 130px);
    width: 160px;

    @media ${devices.my} {
        left: 145px;
        top: 25px;
        
    }

`;
