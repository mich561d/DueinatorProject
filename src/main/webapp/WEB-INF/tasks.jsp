<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Tasks</title>
        <%@include file="/Assets/Imports/Bootstrap.jsp" %>
    </head>
    <body style="background-color: #252525;">
        <%@include file="/Assets/Imports/Header.jsp" %>
        <div style="height: 60px"></div>
        <div style="width: 50%">
            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>05/02/2019 - Day 1</td>
                        <td>        
                            <a href="https://docs.google.com/document/d/1_JV7ePLSpxGAd9KqauESTYbdR13LuafNKiFN0RX0v8w/edit">Exercises - Network stack</a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>06/02/2019 - Day 2</td>
                        <td>        
                            <a href="https://docs.google.com/document/d/1SwxIZBLPdN6pKXjm8CmRxFbxxzjaeRbbcIedUwlzk_I/edit">	Exercises - HTTP</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
</html>
