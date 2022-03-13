import 'package:flutter/material.dart';
import 'new_route.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: '标题栏'),
    );
  }
}

class MyHomePage extends StatelessWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  Widget build(BuildContext context) {
    final divider = Divider(height: 0);
    return Scaffold(
        appBar: AppBar(
          // Here we take the value from the MyHomePage object that was created by
          // the App.build method, and use it to set our appbar title.
          title: Text(title),
          elevation: 0,
        ),
        body: ListView.separated(
            itemBuilder: (_, i) => _buildItem(context, i),
            separatorBuilder: (i, _) => divider,
            itemCount: 100));
  }

  Widget _buildItem(BuildContext context, int i) {
    return InkWell(
      onTap: () {
        Navigator.push(context, MaterialPageRoute(builder: (context) {
          return NewRoute(title: i.toString());
        }));
      },
      child: Container(
        height: 48,
        padding: EdgeInsets.all(8),
        child: Row(
          children: [
            Text(i.toString()),
            Spacer(),
            Icon(Icons.keyboard_arrow_right)
          ],
        ),
      ),
    );
  }
}
