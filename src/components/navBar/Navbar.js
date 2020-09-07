import React, { Component } from "react";
import styled from "styled-components";
import jacob from './jacob.jpg';
import ellie from './ellie.jpg';
import me from './me.jpg';

//setting the menu titles and images for navbar items
const SidebarContainer = styled.div`
        height: 100%;
        width: 180px;
        background-color: #3264FA;
        color: #FAFA00;
        display: flex;
        flex-direction: column;
        font-family: "Roboto", sans-serif;
`;

const SidebarMenu = styled.ul`
        display: flex;
        align-items: left;
        flex-direction: column;
        list-style: none;
        width: 100%;
        padding-left: 0px;      
`;

const MenuLogo = styled.div`
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 16px;
        font-size: 18px;
        line-height: 1.5;
        font-weight: 600;
        height: 45px;
        color: #fff;
        margin: 0px 30px 30px 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid #2e2e33;
`;

const SidebarMenuItem = styled.li`
        display: flex;
        height: 40px;
        width: 100%;
        align-items: center;
        padding-left: 30px;
        &:hover {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 3px 25 25 0 #FAC800;
        cursor: pointer;
}
`;

const Icon = styled.svg`
        width: 20px;
        height: 20px;
`;

const SidebarMenuItemLabel = styled.p`
        font-family: "Open Sans", sans-serif;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.3;
        text-align: left;
        padding: 12px 0px;
        margin-left: 20px;
        color: #46fa23;
`;

const MenuSignOut = styled.div`
        border-top: 1px solid #2e2e33;
        font-size: 14px;
        line-height: 1.5;
        font-weight: 500;
        height: 45px;
        color: #2e2e33;
        margin: 200px 30px 60px 30px;
        padding: 20px 0px 0px 30px;
`;

//rendering the navbar to the page
class Sidebar extends Component {
        render() {
                return (
                        <SidebarContainer>
                                <SidebarMenu>
                                        <MenuLogo>
                                                {" "}
                                                <Icon viewBox="0 0 20 20">
                                                        <path
                                                                width="20px"
                                                                height="20px"
                                                                viewBox="0 0 20 17"
                                                                fill="cyan"
                                                                d="M4.23832506,4.349694 L5.39932506,7.16397019 L2.73332506,7.16397019 L4.23832506,4.349694 Z M13.5843251,9.22420166 L16.5773251,9.22420166 L11.0983251,15.2483185 L13.5843251,9.22420166 Z M8.74132506,15.2627401 L3.10032506,9.22420166 L6.24932506,9.22420166 L8.74132506,15.2627401 Z M7.56832506,7.16397019 L6.29332506,4.07362298 L13.5403251,4.07362298 L12.2653251,7.16397019 L7.56832506,7.16397019 Z M11.4153251,9.22420166 L9.91732506,12.8553596 L8.41832506,9.22420166 L11.4153251,9.22420166 Z M17.2603251,7.16397019 L14.4343251,7.16397019 L15.6113251,4.3105496 L17.2603251,7.16397019 Z M19.7873251,7.43592074 L16.9333251,2.26783009 C16.8173251,2.08652972 16.6613251,2 16.4823251,2 C16.2933251,2 16.0773251,2.0133915 15.8533251,2.0133915 L4.18832506,2.0133915 C3.96732506,2.0133915 3.75432506,2.00515058 3.56732506,2.00515058 C3.37732506,2.00515058 3.21332506,2.07313822 3.09432506,2.26783009 L0.198325064,7.75216627 C-0.107674936,8.25383264 -0.0556749356,8.8337878 0.327325064,9.27570745 L9.02132506,18.55499 C9.27732506,18.8516633 9.63032506,19 9.98332506,19 C10.3423251,19 10.7013251,18.848573 10.9593251,18.5436587 L19.6813251,9.01508817 C20.0633251,8.56389747 20.1063251,7.93449676 19.7873251,7.43592074 L19.7873251,7.43592074 Z"
                                                                id=""
                                                        />
                                                </Icon>
                   kwitter
                   <p></p>
                                        </MenuLogo>
                                        <SidebarMenuItem>
                                                <Icon viewBox="0 0 20 20">
                                                        <path
                                                                width="20px"
                                                                height="20px"
                                                                fill="cyan"
                                                                fill-rule="evenodd"
                                                                d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                                                                id="/"
                                                        />
                                                </Icon>
                                                <SidebarMenuItemLabel>Home</SidebarMenuItemLabel>
                                        </SidebarMenuItem>
                                        <SidebarMenuItem>
                                                <Icon viewBox="0 0 20 20">
                                                        <path
                                                                width="20px"
                                                                height="20px"
                                                                fill="cyan"
                                                                fill-rule="evenodd"
                                                                d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                                                                id="/Notifications"
                                                        />
                                                </Icon>
                                                <SidebarMenuItemLabel>Notifications</SidebarMenuItemLabel>
                                        </SidebarMenuItem>
                                        <SidebarMenuItem>
                                                <div id="mySidenav" class="sidenav">
                                                        <a href="#" id="messages"></a>
                                                </div>
                                                <Icon viewBox="0 0 20 20">
                                                        <path
                                                                width="20px"
                                                                height="20px"
                                                                fill="cyan"
                                                                fill-rule="evenodd"
                                                                d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                                                                id="/messagefeed"

                                                        />
                                                </Icon>
                                                <SidebarMenuItemLabel>Messages</SidebarMenuItemLabel>
                                        </SidebarMenuItem>
                                        <SidebarMenuItem>
                                                <Icon viewBox="0 0 20 20">
                                                        <path
                                                                width="20px"
                                                                height="20px"
                                                                fill="cyan"
                                                                fill-rule="evenodd"
                                                                d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z"
                                                                id="/search"
                                                        />
                                                </Icon>
                                                <SidebarMenuItemLabel>Search</SidebarMenuItemLabel>
                                        </SidebarMenuItem>
                                        <SidebarMenuItem>
                                                <Icon viewBox="0 0 20 19">
                                                        <path
                                                                width="20px"
                                                                height="19px"
                                                                fill="cyan"
                                                                fill-rule="evenodd"
                                                                d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                                                                id="/bookmarks"
                                                        />
                                                </Icon>
                                                <SidebarMenuItemLabel>Bookmarks</SidebarMenuItemLabel>
                                        </SidebarMenuItem>
                                        <SidebarMenuItem>
                                                <Icon viewBox="0 0 20 20">
                                                        <path
                                                                width="20px"
                                                                height="20px"
                                                                fill="cyan"
                                                                fill-rule="evenodd"
                                                                d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"
                                                                id="/more"
                                                        />
                                                </Icon>
                                                <SidebarMenuItemLabel>More options...</SidebarMenuItemLabel>
                
                                        </SidebarMenuItem>
                                        <h3>Contributors:</h3>
                                        <p><img src={ellie}></img>Eleanor Hall</p>
                                        <em>Product Owner</em>
                                        <p><img src={jacob}></img>Jacob Knaust</p>
                                        <em>Scrum Master</em>
                                        <p>Mel Gutierrez</p>
                                        <p><img src={me}></img>Jenn Schneider</p>
                                </SidebarMenu>
                                <footer></footer>
                        </SidebarContainer>
//upper^ : displaying our photos and names as contributors for this project
                );
        }
}
export {Sidebar};