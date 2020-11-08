import React from 'react';
import Format from '../../Format';

const controller = `package com.example.whiteboard.controllers;

import com.example.whiteboard.models.Widget;
import com.example.whiteboard.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WidgetController {

    @Autowired
    WidgetService service;// = new WidgetService();

    @GetMapping("/api/topics/{topicId}/widgets")
    public List<Widget> findWidgetsForTopic(
            @PathVariable("topicId") String topicId) {
        return service.findWidgetsForTopic(topicId);
    }

    @GetMapping("/api/widgets")
    public List<Widget> findAllWidgets() {
        return service.findAllWidgets();
    }
    
    @GetMapping("/api/widgets/{wid}")
    public Widget findWidgetById(
            @PathVariable("wid") Integer widgetId) {
        return service.findWidgetById(widgetId);
    }
   
    @PostMapping("/api/topics/{topicId}/widgets")
    public Widget createWidget(
            @PathVariable("topicId") String tid,
            @RequestBody Widget widget) {
        System.out.println("widget is " + widget);
        widget.setTopicId(tid);
        return service.createWidget(widget);
    }
   
    @DeleteMapping("/api/widgets/{widgetId}")
    public void deleteWidget(
            @PathVariable("widgetId") Integer wid) {
        service.deleteWidget(wid);
    }
    
    @PutMapping("/api/widgets/{wid}")
    public Widget updateWidget(
            @PathVariable("wid") Integer widgetId,
            @RequestBody Widget newWidget) {
        return service.updateWidget(widgetId, newWidget);
    }
}`;

const model = `package com.example.whiteboard.models;

import javax.persistence.*;

@Entity
@Table(name="widgets")
public class Widget {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String topicId;
    private String name;
    private String type;

    public Widget(Integer id, String type, String name) {
        this.id = id;
        this.type = type;
        this.name = name;
    }

    public Widget() {
    }

    //Getters and Setters
}`;

const repository = `package com.example.whiteboard.repositories;

import com.example.whiteboard.models.Widget;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WidgetRepository
    extends CrudRepository<Widget, Integer> {

    @Query("select widget from Widget widget where topicId=:topicId")
    public List<Widget> findWidgetsForTopic(
            @Param("topicId") String topicId);
}`;

const services = `package com.example.whiteboard.services;

import com.example.whiteboard.models.Widget;
import com.example.whiteboard.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository widgetRepository;

    public List<Widget> findWidgetsForTopic(String tid) {
        return widgetRepository.findWidgetsForTopic(tid);
    }
   
    public List<Widget> findAllWidgets() {
        return (List<Widget>) widgetRepository.findAll();
    }
   
    public Widget findWidgetById(Integer widgetId) {
        return widgetRepository.findById(widgetId).get();
    }
    
    public Widget createWidget(Widget widget) {
        return widgetRepository.save(widget);
    }
    
    public void deleteWidget(Integer wid) {
        widgetRepository.deleteById(wid);
    }
    
    public Widget updateWidget(
            Integer widgetId,
            Widget newWidget) {
        Optional widgetO = widgetRepository.findById(widgetId);
        if(widgetO.isPresent()) {
            Widget widget = (Widget) widgetO.get();
            widget.setName(newWidget.getName());
            widget.setType(newWidget.getType());
            widget.setText(newWidget.getText());
            return widgetRepository.save(widget);
        } else {
            return null;
        }
    }
}`;

const resource = `/resources/application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/cs4550?serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=willtoria629
spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=true
spring.jpa.hibernate.naming-strategy=org.hibernate.cfg.ImprovedNamingStrategy
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.properties.hibernate.use_sql_comments=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.type=trace`;

const pom = `pom.xml
<dependency>
  <groupId>mysql</groupId>
  <artifactId>mysql-connector-java</artifactId>
  <version>8.0.17</version>
</dependency>

<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>`;

const spring = `spring init --dependencies=web myapp

mkdir myapp/src/main/webapp

cd myapp
mvn clean install
java -jar target/myapp-0.0.1-SNAPSHOT.jar`;

const json = [
  { language: 'bash', code: spring },
  { language: 'java', code: controller },
  { language: 'java', code: model },
  { language: 'java', code: repository },
  { language: 'java', code: services },
  { language: 'java', code: resource },
  { language: 'xmlDoc', code: pom },
];

const MySqlApi = () => {
  return <Format json={json} />;
};

export default MySqlApi;
