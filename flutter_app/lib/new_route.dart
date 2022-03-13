import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class NewRoute extends StatelessWidget {
  NewRoute({this.title = ""});

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: Center(
        child: Text(title),
      ),
    );
  }
}
