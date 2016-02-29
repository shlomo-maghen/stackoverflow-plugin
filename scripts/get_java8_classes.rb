require 'open-uri'
require 'nokogiri'

page = Nokogiri::HTML open('https://docs.oracle.com/javase/8/docs/api/allclasses-frame.html')
classes = page.css("li a")
puts "["
classes.each do |c|
  puts "{\"class\":\"#{c.text}\",\"href\":\"https://docs.oracle.com/javase/8/docs/api/#{c.attr "href"}\"},"
end
puts "]"
