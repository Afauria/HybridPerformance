package com.afauria.performance.android_app

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.speech.tts.TextToSpeech
import android.view.*
import android.widget.TextView
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.RecyclerView.OnItemTouchListener

class MainActivity : AppCompatActivity(), OnItemClickListener {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        title = "标题栏"
        setContentView(R.layout.activity_main)
        val recyclerView = findViewById<RecyclerView>(R.id.rv)
        recyclerView.adapter = MyAdapter(this)
        recyclerView.layoutManager = LinearLayoutManager(this)
    }

    override fun onItemClick(position: Int) {
        val intent = Intent(this, SecondActivity::class.java).apply {
            putExtra("index", position)
        }
        startActivity(intent)
    }
}

interface OnItemClickListener {
    fun onItemClick(position: Int)
}

class MyAdapter(private val _itemClickListener:OnItemClickListener) : RecyclerView.Adapter<MyViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_view, parent, false)
        return MyViewHolder(view)
    }

    override fun getItemCount(): Int = 100

    override fun onBindViewHolder(holder: MyViewHolder, position: Int) {
        holder.itemTitle.text = position.toString()
        holder.itemView.setOnClickListener {
            _itemClickListener.onItemClick(position)
        }
    }
}

class MyViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
    val itemTitle: TextView = itemView.findViewById(R.id.item_title)
}